exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      api {
        types {
          slug
          id
          events {
            id
          }
        }
        topics {
          slug
          id
          types {
            slug
            id
          }
          events {
            id
          }
        }
      }
    }
  `);
  if (result.errors) {
    throw result.errors;
  }

  // Create blog articles pages.
  const types = result.data.api.types;
  const topics = result.data.api.topics;

  const Archive = require.resolve("./src/templates/Archive.tsx");

  types.forEach((type, index) => {
    let eventIds = [];
    type.events.forEach((event) => eventIds.push(event.id));
    createPage({
      path: `/${type.slug}`,
      component: Archive,
      context: {
        events: eventIds,
      },
    });
  });

  await Promise.all(
    topics.map(async (topic, index) => {
      await Promise.all(
        topic.types.map(async (type) => {
          let eventIds = [];
          const typeResult = await graphql(`
          query {
            api {
              types(where:{id:${type.id}}){
                topics(where:{id:${topic.id}}){
                  events{
                    id
                  }
                }
              }
            }
          }
        `);

          typeResult.data.api.types[0].topics[0].events.forEach((event) =>
            eventIds.push(event.id)
          );

          await createPage({
            path: `/${type.slug}/${topic.slug}`,
            component: Archive,
            context: {
              events: eventIds,
            },
          });
        })
      );
    })
  );
};

module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  const crypto = require(`crypto`);

  if (node.internal.type === "StrapiArticle") {
    const newNode = {
      id: createNodeId(`StrapiArticleContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || " ",
        type: "StrapiArticleContent",
        mediaType: "text/markdown",
        contentDigest: crypto
          .createHash("md5")
          .update(node.content || " ")
          .digest("hex"),
      },
    };
    actions.createNode(newNode);
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    });
  }
};
