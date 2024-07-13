export class ReplaceNotFoundError extends Error {
  constructor(message?: string) {
    super(message ?? "replace_not_found");
  }
}

export class ReplaceAlreadyExistsError extends Error {
  constructor(message?: string) {
    super(message ?? "replace_already_exists");
  }
}

export class ReplaceNotCreatedError extends Error {
  constructor(message?: string) {
    super(message ?? "replace_not_created");
  }
}

export class ReplaceNotUpdatedError extends Error {
  constructor(message?: string) {
    super(message ?? "replace_not_updated");
  }
}

export class ReplaceNotDeletedError extends Error {
  constructor(message?: string) {
    super(message ?? "replace_not_deleted");
  }
}

export class ReplacePaginationError extends Error {
  constructor(message?: string) {
    super(message ?? "replace_pagination_error");
  }
}
