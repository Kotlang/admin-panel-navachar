/**
 * @fileoverview gRPC-Web generated client stub for login
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.1
// source: lead.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as lead_pb from './lead_pb'; // proto import: "lead.proto"
import * as common_pb from './common_pb'; // proto import: "common.proto"


export class LeadServiceClient {
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

  methodDescriptorCreateLead = new grpcWeb.MethodDescriptor(
    '/login.LeadService/CreateLead',
    grpcWeb.MethodType.UNARY,
    lead_pb.CreateOrUpdateLeadRequest,
    lead_pb.LeadProto,
    (request: lead_pb.CreateOrUpdateLeadRequest) => {
      return request.serializeBinary();
    },
    lead_pb.LeadProto.deserializeBinary
  );

  createLead(
    request: lead_pb.CreateOrUpdateLeadRequest,
    metadata?: grpcWeb.Metadata | null): Promise<lead_pb.LeadProto>;

  createLead(
    request: lead_pb.CreateOrUpdateLeadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: lead_pb.LeadProto) => void): grpcWeb.ClientReadableStream<lead_pb.LeadProto>;

  createLead(
    request: lead_pb.CreateOrUpdateLeadRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: lead_pb.LeadProto) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.LeadService/CreateLead',
        request,
        metadata || {},
        this.methodDescriptorCreateLead,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.LeadService/CreateLead',
    request,
    metadata || {},
    this.methodDescriptorCreateLead);
  }

  methodDescriptorGetLeadById = new grpcWeb.MethodDescriptor(
    '/login.LeadService/GetLeadById',
    grpcWeb.MethodType.UNARY,
    lead_pb.LeadIdRequest,
    lead_pb.LeadProto,
    (request: lead_pb.LeadIdRequest) => {
      return request.serializeBinary();
    },
    lead_pb.LeadProto.deserializeBinary
  );

  getLeadById(
    request: lead_pb.LeadIdRequest,
    metadata?: grpcWeb.Metadata | null): Promise<lead_pb.LeadProto>;

  getLeadById(
    request: lead_pb.LeadIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: lead_pb.LeadProto) => void): grpcWeb.ClientReadableStream<lead_pb.LeadProto>;

  getLeadById(
    request: lead_pb.LeadIdRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: lead_pb.LeadProto) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.LeadService/GetLeadById',
        request,
        metadata || {},
        this.methodDescriptorGetLeadById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.LeadService/GetLeadById',
    request,
    metadata || {},
    this.methodDescriptorGetLeadById);
  }

  methodDescriptorBulkGetLeadsById = new grpcWeb.MethodDescriptor(
    '/login.LeadService/BulkGetLeadsById',
    grpcWeb.MethodType.UNARY,
    lead_pb.BulkIdRequest,
    lead_pb.LeadListResponse,
    (request: lead_pb.BulkIdRequest) => {
      return request.serializeBinary();
    },
    lead_pb.LeadListResponse.deserializeBinary
  );

  bulkGetLeadsById(
    request: lead_pb.BulkIdRequest,
    metadata?: grpcWeb.Metadata | null): Promise<lead_pb.LeadListResponse>;

  bulkGetLeadsById(
    request: lead_pb.BulkIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: lead_pb.LeadListResponse) => void): grpcWeb.ClientReadableStream<lead_pb.LeadListResponse>;

  bulkGetLeadsById(
    request: lead_pb.BulkIdRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: lead_pb.LeadListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.LeadService/BulkGetLeadsById',
        request,
        metadata || {},
        this.methodDescriptorBulkGetLeadsById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.LeadService/BulkGetLeadsById',
    request,
    metadata || {},
    this.methodDescriptorBulkGetLeadsById);
  }

  methodDescriptorUpdateLead = new grpcWeb.MethodDescriptor(
    '/login.LeadService/UpdateLead',
    grpcWeb.MethodType.UNARY,
    lead_pb.CreateOrUpdateLeadRequest,
    lead_pb.LeadProto,
    (request: lead_pb.CreateOrUpdateLeadRequest) => {
      return request.serializeBinary();
    },
    lead_pb.LeadProto.deserializeBinary
  );

  updateLead(
    request: lead_pb.CreateOrUpdateLeadRequest,
    metadata?: grpcWeb.Metadata | null): Promise<lead_pb.LeadProto>;

  updateLead(
    request: lead_pb.CreateOrUpdateLeadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: lead_pb.LeadProto) => void): grpcWeb.ClientReadableStream<lead_pb.LeadProto>;

  updateLead(
    request: lead_pb.CreateOrUpdateLeadRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: lead_pb.LeadProto) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.LeadService/UpdateLead',
        request,
        metadata || {},
        this.methodDescriptorUpdateLead,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.LeadService/UpdateLead',
    request,
    metadata || {},
    this.methodDescriptorUpdateLead);
  }

  methodDescriptorDeleteLead = new grpcWeb.MethodDescriptor(
    '/login.LeadService/DeleteLead',
    grpcWeb.MethodType.UNARY,
    lead_pb.LeadIdRequest,
    common_pb.StatusResponse,
    (request: lead_pb.LeadIdRequest) => {
      return request.serializeBinary();
    },
    common_pb.StatusResponse.deserializeBinary
  );

  deleteLead(
    request: lead_pb.LeadIdRequest,
    metadata?: grpcWeb.Metadata | null): Promise<common_pb.StatusResponse>;

  deleteLead(
    request: lead_pb.LeadIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: common_pb.StatusResponse) => void): grpcWeb.ClientReadableStream<common_pb.StatusResponse>;

  deleteLead(
    request: lead_pb.LeadIdRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: common_pb.StatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.LeadService/DeleteLead',
        request,
        metadata || {},
        this.methodDescriptorDeleteLead,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.LeadService/DeleteLead',
    request,
    metadata || {},
    this.methodDescriptorDeleteLead);
  }

  methodDescriptorFetchLeads = new grpcWeb.MethodDescriptor(
    '/login.LeadService/FetchLeads',
    grpcWeb.MethodType.UNARY,
    lead_pb.FetchLeadsRequest,
    lead_pb.LeadListResponse,
    (request: lead_pb.FetchLeadsRequest) => {
      return request.serializeBinary();
    },
    lead_pb.LeadListResponse.deserializeBinary
  );

  fetchLeads(
    request: lead_pb.FetchLeadsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<lead_pb.LeadListResponse>;

  fetchLeads(
    request: lead_pb.FetchLeadsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: lead_pb.LeadListResponse) => void): grpcWeb.ClientReadableStream<lead_pb.LeadListResponse>;

  fetchLeads(
    request: lead_pb.FetchLeadsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: lead_pb.LeadListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/login.LeadService/FetchLeads',
        request,
        metadata || {},
        this.methodDescriptorFetchLeads,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/login.LeadService/FetchLeads',
    request,
    metadata || {},
    this.methodDescriptorFetchLeads);
  }

}

