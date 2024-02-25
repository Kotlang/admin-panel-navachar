/**
 * @fileoverview gRPC-Web generated client stub for social
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: social.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as social_pb from './social_pb';
import * as commons_pb from './commons_pb';


export class UserPostClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreatePost = new grpcWeb.MethodDescriptor(
    '/social.UserPost/CreatePost',
    grpcWeb.MethodType.UNARY,
    social_pb.UserPostRequest,
    social_pb.UserPostProto,
    (request: social_pb.UserPostRequest) => {
      return request.serializeBinary();
    },
    social_pb.UserPostProto.deserializeBinary
  );

  createPost(
    request: social_pb.UserPostRequest,
    metadata: grpcWeb.Metadata | null): Promise<social_pb.UserPostProto>;

  createPost(
    request: social_pb.UserPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: social_pb.UserPostProto) => void): grpcWeb.ClientReadableStream<social_pb.UserPostProto>;

  createPost(
    request: social_pb.UserPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: social_pb.UserPostProto) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.UserPost/CreatePost',
        request,
        metadata || {},
        this.methodDescriptorCreatePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.UserPost/CreatePost',
    request,
    metadata || {},
    this.methodDescriptorCreatePost);
  }

  methodDescriptorDeletePost = new grpcWeb.MethodDescriptor(
    '/social.UserPost/DeletePost',
    grpcWeb.MethodType.UNARY,
    social_pb.DeletePostRequest,
    commons_pb.SocialStatusResponse,
    (request: social_pb.DeletePostRequest) => {
      return request.serializeBinary();
    },
    commons_pb.SocialStatusResponse.deserializeBinary
  );

  deletePost(
    request: social_pb.DeletePostRequest,
    metadata: grpcWeb.Metadata | null): Promise<commons_pb.SocialStatusResponse>;

  deletePost(
    request: social_pb.DeletePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void): grpcWeb.ClientReadableStream<commons_pb.SocialStatusResponse>;

  deletePost(
    request: social_pb.DeletePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: commons_pb.SocialStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.UserPost/DeletePost',
        request,
        metadata || {},
        this.methodDescriptorDeletePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.UserPost/DeletePost',
    request,
    metadata || {},
    this.methodDescriptorDeletePost);
  }

  methodDescriptorGetFeed = new grpcWeb.MethodDescriptor(
    '/social.UserPost/GetFeed',
    grpcWeb.MethodType.UNARY,
    social_pb.GetFeedRequest,
    social_pb.FeedResponse,
    (request: social_pb.GetFeedRequest) => {
      return request.serializeBinary();
    },
    social_pb.FeedResponse.deserializeBinary
  );

  getFeed(
    request: social_pb.GetFeedRequest,
    metadata: grpcWeb.Metadata | null): Promise<social_pb.FeedResponse>;

  getFeed(
    request: social_pb.GetFeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: social_pb.FeedResponse) => void): grpcWeb.ClientReadableStream<social_pb.FeedResponse>;

  getFeed(
    request: social_pb.GetFeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: social_pb.FeedResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.UserPost/GetFeed',
        request,
        metadata || {},
        this.methodDescriptorGetFeed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.UserPost/GetFeed',
    request,
    metadata || {},
    this.methodDescriptorGetFeed);
  }

  methodDescriptorGetMediaUploadUrl = new grpcWeb.MethodDescriptor(
    '/social.UserPost/GetMediaUploadUrl',
    grpcWeb.MethodType.UNARY,
    social_pb.MediaUploadRequest,
    social_pb.MediaUploadURL,
    (request: social_pb.MediaUploadRequest) => {
      return request.serializeBinary();
    },
    social_pb.MediaUploadURL.deserializeBinary
  );

  getMediaUploadUrl(
    request: social_pb.MediaUploadRequest,
    metadata: grpcWeb.Metadata | null): Promise<social_pb.MediaUploadURL>;

  getMediaUploadUrl(
    request: social_pb.MediaUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: social_pb.MediaUploadURL) => void): grpcWeb.ClientReadableStream<social_pb.MediaUploadURL>;

  getMediaUploadUrl(
    request: social_pb.MediaUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: social_pb.MediaUploadURL) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.UserPost/GetMediaUploadUrl',
        request,
        metadata || {},
        this.methodDescriptorGetMediaUploadUrl,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.UserPost/GetMediaUploadUrl',
    request,
    metadata || {},
    this.methodDescriptorGetMediaUploadUrl);
  }

  methodDescriptorGetPost = new grpcWeb.MethodDescriptor(
    '/social.UserPost/GetPost',
    grpcWeb.MethodType.UNARY,
    social_pb.GetPostRequest,
    social_pb.UserPostProto,
    (request: social_pb.GetPostRequest) => {
      return request.serializeBinary();
    },
    social_pb.UserPostProto.deserializeBinary
  );

  getPost(
    request: social_pb.GetPostRequest,
    metadata: grpcWeb.Metadata | null): Promise<social_pb.UserPostProto>;

  getPost(
    request: social_pb.GetPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: social_pb.UserPostProto) => void): grpcWeb.ClientReadableStream<social_pb.UserPostProto>;

  getPost(
    request: social_pb.GetPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: social_pb.UserPostProto) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.UserPost/GetPost',
        request,
        metadata || {},
        this.methodDescriptorGetPost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.UserPost/GetPost',
    request,
    metadata || {},
    this.methodDescriptorGetPost);
  }

  methodDescriptorGetBookmarks = new grpcWeb.MethodDescriptor(
    '/social.UserPost/GetBookmarks',
    grpcWeb.MethodType.UNARY,
    social_pb.GetBookmarksRequest,
    social_pb.FeedResponse,
    (request: social_pb.GetBookmarksRequest) => {
      return request.serializeBinary();
    },
    social_pb.FeedResponse.deserializeBinary
  );

  getBookmarks(
    request: social_pb.GetBookmarksRequest,
    metadata: grpcWeb.Metadata | null): Promise<social_pb.FeedResponse>;

  getBookmarks(
    request: social_pb.GetBookmarksRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: social_pb.FeedResponse) => void): grpcWeb.ClientReadableStream<social_pb.FeedResponse>;

  getBookmarks(
    request: social_pb.GetBookmarksRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: social_pb.FeedResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.UserPost/GetBookmarks',
        request,
        metadata || {},
        this.methodDescriptorGetBookmarks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.UserPost/GetBookmarks',
    request,
    metadata || {},
    this.methodDescriptorGetBookmarks);
  }

  methodDescriptorGetTags = new grpcWeb.MethodDescriptor(
    '/social.UserPost/GetTags',
    grpcWeb.MethodType.UNARY,
    social_pb.GetTagsRequest,
    social_pb.TagListResponse,
    (request: social_pb.GetTagsRequest) => {
      return request.serializeBinary();
    },
    social_pb.TagListResponse.deserializeBinary
  );

  getTags(
    request: social_pb.GetTagsRequest,
    metadata: grpcWeb.Metadata | null): Promise<social_pb.TagListResponse>;

  getTags(
    request: social_pb.GetTagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: social_pb.TagListResponse) => void): grpcWeb.ClientReadableStream<social_pb.TagListResponse>;

  getTags(
    request: social_pb.GetTagsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: social_pb.TagListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.UserPost/GetTags',
        request,
        metadata || {},
        this.methodDescriptorGetTags,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.UserPost/GetTags',
    request,
    metadata || {},
    this.methodDescriptorGetTags);
  }

  methodDescriptorParsePost = new grpcWeb.MethodDescriptor(
    '/social.UserPost/ParsePost',
    grpcWeb.MethodType.UNARY,
    social_pb.UserPostRequest,
    social_pb.UserPostRequest,
    (request: social_pb.UserPostRequest) => {
      return request.serializeBinary();
    },
    social_pb.UserPostRequest.deserializeBinary
  );

  parsePost(
    request: social_pb.UserPostRequest,
    metadata: grpcWeb.Metadata | null): Promise<social_pb.UserPostRequest>;

  parsePost(
    request: social_pb.UserPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: social_pb.UserPostRequest) => void): grpcWeb.ClientReadableStream<social_pb.UserPostRequest>;

  parsePost(
    request: social_pb.UserPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: social_pb.UserPostRequest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/social.UserPost/ParsePost',
        request,
        metadata || {},
        this.methodDescriptorParsePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/social.UserPost/ParsePost',
    request,
    metadata || {},
    this.methodDescriptorParsePost);
  }

}
