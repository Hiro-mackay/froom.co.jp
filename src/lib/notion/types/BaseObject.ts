export type BaseObject = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  parent: {
    type: string;
    page_id: string;
  };
  icon: {
    type: string;
    emoji: string;
  };
  cover: {
    type: string;
    external: {
      url: string;
    };
  };
  url: string;
  title: Array<RichText>;
  properties: Record<
    string,
    | TitleProperties
    | RichTextProperties
    | NumberProperties
    | UrlProperties
    | SelectProperties
    | MultiSelectProperties
    | PeopleProperties
    | EmailProperties
    | PhoneNumberProperties
    | DateProperties
    | FilesProperties
    | CheckboxProperties
    | FormulaProperties
    | RollupProperties
    | CreatedDateProperties
    | CreatedByProperties
    | LastEditedTimeProperties
    | LastEditedByProperties
  >;
};

export type TextObject = {
  content: string;
  link: { url: TextRequest } | null;
};

export type RichTextColor =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'gray_background'
  | 'brown_background'
  | 'orange_background'
  | 'yellow_background'
  | 'green_background'
  | 'blue_background'
  | 'purple_background'
  | 'pink_background'
  | 'red_background';

export type TextAnnotations = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: RichTextColor;
};

export type RichText = {
  type: 'text';
  text: TextObject;
  annotations: TextAnnotations;
  plain_text: string;
  href: string | null;
};

export type Mention = {
  type: 'mention';
  mention:
    | {
        type: 'user';
        user:
          | { id: IdRequest; object: 'user' }
          | {
              type: 'person';
              person: { email: string };
              name: string | null;
              avatar_url: string | null;
              id: IdRequest;
              object: 'user';
            }
          | {
              type: 'bot';
              bot:
                | Record<string, never>
                | {
                    owner:
                      | {
                          type: 'user';
                          user:
                            | {
                                type: 'person';
                                person: { email: string };
                                name: string | null;
                                avatar_url: string | null;
                                id: IdRequest;
                                object: 'user';
                              }
                            | {
                                id: IdRequest;
                                object: 'user';
                              };
                        }
                      | { type: 'workspace'; workspace: true };
                  };
              name: string | null;
              avatar_url: string | null;
              id: IdRequest;
              object: 'user';
            };
      }
    | {
        type: 'date';
        date: { start: string; end: string | null };
      }
    | { type: 'page'; page: { id: IdRequest } }
    | { type: 'database'; database: { id: IdRequest } };
  annotations: TextAnnotations;
  plain_text: string;
  href: string | null;
};

export type Equation = {
  type: 'equation';
  equation: { expression: TextRequest };
  annotations: TextAnnotations;
  plain_text: string;
  href: string | null;
};

export type Person = {
  type: 'person';
  person: { email: string };
  name: string | null;
  avatar_url: string | null;
  id: IdRequest;
  object: 'user';
};

export type Bot = {
  type: 'bot';
  bot:
    | Record<string, never>
    | {
        owner:
          | {
              type: 'user';
              user:
                | {
                    type: 'person';
                    person: { email: string };
                    name: string | null;
                    avatar_url: string | null;
                    id: IdRequest;
                    object: 'user';
                  }
                | { id: IdRequest; object: 'user' };
            }
          | { type: 'workspace'; workspace: true };
      };
  name: string | null;
  avatar_url: string | null;
  id: IdRequest;
  object: 'user';
};

export type TextRequest = string;
export type IdRequest = string;
export type StringRequest = string;

export type TitleProperties = {
  type: 'title';
  title: Array<RichText | Mention | Equation>;
  id: string;
};

export type RichTextProperties = {
  type: 'rich_text';
  rich_text: Array<RichText | Mention | Equation>;
  id: string;
};

export type NumberProperties = { type: 'number'; number: number; id: string };

export type UrlProperties = {
  type: 'url';
  url: string;
  id: string;
};

export type SelectProperties = {
  type: 'select';
  select: {
    id: StringRequest;
    name: StringRequest;
    color: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
  };
  id: string;
};

export type MultiSelectProperties = {
  type: 'multi_select';
  multi_select: Array<{
    id: StringRequest;
    name: StringRequest;
    color: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
  }>;
  id: string;
};

export type PeopleProperties = {
  type: 'people';
  people: Array<{ id: IdRequest; object: 'user' } | Person | Bot>;
  id: string;
};

export type EmailProperties = { type: 'email'; email: string; id: string };

export type PhoneNumberProperties = { type: 'phone_number'; phone_number: string; id: string };

export type DateProperties = { type: 'date'; date: { start: string; end: string | null }; id: string };

export type FilesProperties = {
  type: 'files';
  files: Array<
    | {
        file: { url: string; expiry_time: string };
        name: string;
        type?: 'file';
      }
    | { external: { url: string }; name: string; type?: 'external' }
  >;
  id: string;
};

export type CheckboxProperties = { type: 'checkbox'; checkbox: boolean; id: string };

export type FormulaProperties = {
  type: 'formula';
  formula:
    | { type: 'string'; string: string | null }
    | {
        type: 'date';
        date: { start: string; end: string | null } | null;
      }
    | { type: 'number'; number: number | null }
    | { type: 'boolean'; boolean: boolean | null };
  id: string;
};
export type RelationProperties = { type: 'relation'; relation: Array<{ id: string }>; id: string };

export type RollupProperties = {
  type: 'rollup';
  rollup: any;
  id: string;
};

export type CreatedDateProperties = { type: 'created_time'; created_time: string; id: string };

export type CreatedByProperties = {
  type: 'created_by';
  created_by: { id: IdRequest; object: 'user' } | Person | Bot;
  id: string;
};
export type LastEditedTimeProperties = { type: 'last_edited_time'; last_edited_time: string; id: string };
export type LastEditedByProperties = {
  type: 'last_edited_by';
  last_edited_by: { id: IdRequest; object: 'user' } | Person | Bot;
  id: string;
};
