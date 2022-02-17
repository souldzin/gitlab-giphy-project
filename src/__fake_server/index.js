import { createServer } from "miragejs";
import discussionResponse from "../www/gitlab-org/gitlab/-/issues/17379/discussions.json";
import emojisResponse from "../www/-/emojis/2/emojis.json";
import notesResponse from "../www/gitlab-org/gitlab/noteable/issue/24651689/notes.json";
import { renderMarkdown } from "../notes/utils";

export const setupFakeServer = () => {
  const el = document.getElementById("js-vue-notes");
  const { discussionsPath, notesPath } = JSON.parse(el.dataset.notesData);

  createServer({
    routes() {
      this.get(discussionsPath, () => discussionResponse);
      this.get("/-/emojis/2/emojis.json", () => emojisResponse);
      this.get(
        "/gitlab-org/gitlab/noteable/issue/24651689/notes",
        () => notesResponse
      );
      this.post("/gitlab-org/gitlab/preview_markdown", (schema, request) => {
        const { text } = JSON.parse(request.requestBody);
        const body = renderMarkdown(text);

        return {
          body,
          references: {
            users: [],
            suggestions: [],
            commands: "",
          },
        };
      });
    },
  });
};
