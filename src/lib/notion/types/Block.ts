import { Equation, Mention, RichText } from './BaseObject';

type BlockObject =
  | ParagraphBlock
  | HeadingOneBlocks
  | HeadingTwoBlocks
  | HeadingThreeBlocks
  | CalloutBlocks
  | QuoteBlock
  | BulletedListItemBlocks
  | NumberedListItemBlocks
  | ToDoBlocks
  | ToggleBlocks
  | CodeBlocks
  | ChildPageBlocks
  | ChildDatabaseBlocks
  | EmbedBlocks
  | ImageBlocks
  | VideoBlocks
  | FileBlocks
  | PDFBlocks
  | BookmarkBlocks
  | EquationBlocks
  | DividerBlocks
  | TableOfContentsBlocks;

type NestedBlock = {
  text: RichTextItem;
  children?: BlockObject;
};

export type ParagraphBlock = { paragraph: NestedBlock; type: 'paragraph' };

export type HeadingOneBlocks = {
  heading_1: { text: RichTextItem };
  type: 'heading_1';
};

export type HeadingTwoBlocks = {
  heading_2: { text: RichTextItem };
  type: 'heading_2';
};

export type HeadingThreeBlocks = {
  heading_3: { text: RichTextItem };
  type: 'heading_3';
};

export type CalloutBlocks = NestedBlock & {
  icon?: Icon;
};

export type QuoteBlock = {
  paragraph: NestedBlock;
  type: 'paragraph';
};

export type BulletedListItemBlocks = {
  bulleted_list_item: NestedBlock;
  type: 'bulleted_list_item';
};

export type NumberedListItemBlocks = {
  numbered_list_item: NestedBlock;
  type: 'numbered_list_item';
};

export type ToDoBlocks = {
  to_do: NestedBlock & { checked: boolean };
  type: 'to_do';
};

export type ToggleBlocks = {
  toggle: NestedBlock;
  type: 'toggle';
};

export type CodeBlocks = {
  code: { text: string; language: CodeLanguage };
  type?: 'code';
};

export type ChildPageBlocks = {
  child_page: {
    title: 'Lacinato kale';
  };
  type: 'child_page';
};

export type ChildDatabaseBlocks = {
  type: 'child_database';
  child_database: { title: string };
};

export type EmbedBlocks = {
  embed: {
    url: string;
  } & Caption;
  type: 'embed';
};

export type ImageBlocks = {
  image: Caption & External;
  type: 'image';
};

export type VideoBlocks = {
  video: Caption & External;
  type: 'video';
};

export type FileBlocks = {
  file: Caption & External;
  type: 'file';
};

export type PDFBlocks = {
  pdf: Caption & External;
  type: 'pdf';
};

export type BookmarkBlocks = {
  bookmark: Caption & External;
  type: 'bookmark';
};

export type EquationBlocks = {
  equation: { expression: string };
  type: 'equation';
};

export type DividerBlocks = { divider: {}; type: 'divider' };

export type TableOfContentsBlocks = { table_of_contents: {}; type: 'table_of_contents' };

type RichTextItem = Array<RichText | Mention | Equation>;

type Icon = {
  type: 'emoji';
  emoji: string;
};

type External = {
  type: 'external';
  external: { url: string };
} & Caption;

type Caption = { caption?: RichTextItem };

export type CodeLanguage =
  | 'abap'
  | 'arduino'
  | 'bash'
  | 'basic'
  | 'c'
  | 'clojure'
  | 'coffeescript'
  | 'c++'
  | 'c#'
  | 'css'
  | 'dart'
  | 'diff'
  | 'docker'
  | 'elixir'
  | 'elm'
  | 'erlang'
  | 'flow'
  | 'fortran'
  | 'f#'
  | 'gherkin'
  | 'glsl'
  | 'go'
  | 'graphql'
  | 'groovy'
  | 'haskell'
  | 'html'
  | 'java'
  | 'javascript'
  | 'json'
  | 'julia'
  | 'kotlin'
  | 'latex'
  | 'less'
  | 'lisp'
  | 'livescript'
  | 'lua'
  | 'makefile'
  | 'markdown'
  | 'markup'
  | 'matlab'
  | 'mermaid'
  | 'nix'
  | 'objective-c'
  | 'ocaml'
  | 'pascal'
  | 'perl'
  | 'php'
  | 'plain text'
  | 'powershell'
  | 'prolog'
  | 'protobuf'
  | 'python'
  | 'r'
  | 'reason'
  | 'ruby'
  | 'rust'
  | 'sass'
  | 'scala'
  | 'scheme'
  | 'scss'
  | 'shell'
  | 'sql'
  | 'swift'
  | 'typescript'
  | 'vb.net'
  | 'verilog'
  | 'vhdl'
  | 'visual basic'
  | 'webassembly'
  | 'xml'
  | 'yaml'
  | 'java/c/c++/c#';
