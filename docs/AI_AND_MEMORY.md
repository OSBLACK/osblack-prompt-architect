# AI, economy mode, and memory

Economy mode asks for the fewest words that preserve the required goal, context, constraints, deliverable, and safety/verification instructions. It does not silently discard requirements. Balanced and Detailed add context and edge cases.

The deterministic builder makes zero model calls. Its token count is an estimate derived from text length. Actual usage is shown only when a provider returns it.

Memory contains only the editable preferences a user saves: language, target, detail level, and custom instructions. The current task overrides memory. Device memory and account storage are labeled separately. Development files such as `AGENTS.md` help future coding sessions; they do not create memory across unrelated AI services.
