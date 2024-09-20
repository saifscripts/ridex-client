export interface IMetaData {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

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
  token?: string;
  refreshToken?: string;
  data: T;
  meta?: IMetaData;
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

export interface IQueryParam {
  key: string;
  value: string | number;
}
