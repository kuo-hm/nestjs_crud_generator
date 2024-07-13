import { HttpStatus } from "@nestjs/common";
import {
  ReplaceAlreadyExistsError,
  ReplaceNotCreatedError,
  ReplaceNotDeletedError,
  ReplaceNotFoundError,
  ReplaceNotUpdatedError,
} from "./replace.error";
const errorMapping: Record<string, HttpStatus> = {
  [ReplaceAlreadyExistsError.name]: HttpStatus.CONFLICT,
  [ReplaceNotCreatedError.name]: HttpStatus.INTERNAL_SERVER_ERROR,
  [ReplaceNotDeletedError.name]: HttpStatus.INTERNAL_SERVER_ERROR,
  [ReplaceNotFoundError.name]: HttpStatus.NOT_FOUND,
  [ReplaceNotUpdatedError.name]: HttpStatus.INTERNAL_SERVER_ERROR,
};

export function errorMapper(error: Error): HttpStatus {
  return (
    errorMapping[error.constructor.name] || HttpStatus.INTERNAL_SERVER_ERROR
  );
}
