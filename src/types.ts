export interface LoginResponse {
  statusCode: number;
  status: string;
  message: string;
  data: string;
}

export interface RegisterResponse {
  statusCode: number;
  status: string;
  message: string;
}

export interface ProductListResponse {
  statusCode: number;
  status: string;
  message: string;
  data: ProductData;
}

export interface ProductData {
  dtoList: DtoList[];
  totalPage: number;
  page: number;
  size: number;
  start: number;
  end: number;
  prev: boolean;
  next: boolean;
  pageList: number[];
}

export interface DtoList {
  pid: number;
  pcategory: string;
  pname: string;
  pexplain: string;
  pprice: number;
  del: boolean;
  mid: null;
  regDate: Date;
  modDate: Date;
  imageDTOList: ImageDTOList[];
}

export interface ImageDTOList {
  imgName: string;
  path: string;
}

export interface ProductDetailResponse {
  statusCode: number;
  status: string;
  message: string;
  data: Detail;
}
export interface Detail {
  pid: number;
  pcategory: string;
  pname: string;
  mname: string;
  pexplain: string;
  pprice: number;
  del: boolean;
  mid: null;
  regDate: Date;
  modDate: Date;
  imageDTOList: ImageDTOList[];
}

export interface BasketResponse {
  statusCode: number;
  status?: string;
  message?: string;
  data?: Datum[];
}

export interface Datum {
  bid: number;
  pid: number;
  mid: number;
}

export interface TokenResponse {
  statusCode: number;
  status: string;
  message: string;
  data?: {
    memberId: number;
  };
}
