import type { TypeOf } from "zod";

import { schema } from "./app.schema";

export type Schema = TypeOf<typeof schema>;
