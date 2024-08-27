export interface IErrorMessage {
  path: string | number;
  message: string;
}

export interface IErrorResponse {
  error: {
    data: {
      success: boolean;
      message: string;
      errorSources: IErrorMessage[];
    };
    status: number;
  };
}

export interface ISuccessResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface IResponse<T> {
  error?: {
    data: {
      success: boolean;
      message: string;
      errorSources: IErrorMessage[];
    };
    status: number;
  };
  data?: ISuccessResponse<T>;
}
