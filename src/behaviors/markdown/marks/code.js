/* eslint-disable class-methods-use-this */

import { Code as BaseCode } from 'tiptap-extensions';
import { defaultMarkdownSerializer } from '~/lib/prosemirror_markdown_serializer';

// Transforms generated HTML back to GFM for Banzai::Filter::MarkdownFilter
export default class Code extends BaseCode {
  get toMarkdown() {
    return defaultMarkdownSerializer.marks.code;
  }
}
