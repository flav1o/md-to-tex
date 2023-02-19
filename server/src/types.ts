import { Router } from "express";

export interface ApiResponse<T> {
	body: T;
	statusCode: number;
}

export interface IRoute {
  name: string;
  router: Router;
}