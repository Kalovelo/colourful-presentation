exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      api {
        types {
          slug
          id
          title
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
            title
          }
          events {
            id
          }
        }
        events {
          id
          title
          date
          slug
          type {
            title
            slug
          }
          topic {
            slug
          }
          place
          summary
          facebook_event
          description
          poster {
            url
          }
          gallery {
            images: image {
              blob {
                url
              }
              alternativeText: alternative_text
            }
          }
          linkBundles: links {
            title
            link {
              title
              url
            }
          }
          codesnippets: code_snippets {
            title
            snippet
          }
          cheatsheet {
            title
            chapters: cheatsheet_chapter {
              title
              fields: cheatsheet_chapter_field {
                command
                explanation
              }
            }
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
  const events = result.data.api.events;

  const Archive = require.resolve("./src/templates/Archive.tsx");
  const Event = require.resolve("./src/templates/Event.tsx");

  events.forEach((event, index) => {
    createPage({
      path: `/${event.type.slug}/${event.topic.slug}/${event.slug}`,
      component: Event,
      context: {
        event: event,
      },
    });
  });

  types.forEach((type, index) => {
    let eventIds = [];
    type.events.forEach((event) => eventIds.push(event.id));
    createPage({
      path: `/${type.slug}`,
      component: Archive,
      context: {
        events: eventIds,
        type: type.title,
      },
    });
  });

  await Promise.all(
    topics.map(async (topic) => {
      await Promise.all(
        topic.types.map(async (type) => {
          let eventIds = [];
          const typeResult = await graphql(`
          query {
            api {
                events(where:{
                  topic:{id:${topic.id}}
                  type:{id:${type.id}}
                }){
                  id
              }
            }
          }
        `);

          typeResult.data.api.events.forEach((event) => eventIds.push(event.id));

          if (!eventIds.length) eventIds = null;
          await createPage({
            path: `/${type.slug}/${topic.slug}`,
            component: Archive,
            context: {
              events: eventIds,
              type: type.title,
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
