/* eslint-disable */

// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Metadata, RpcError } from 'grpc-web';
import { addJwtToken } from 'src/clients/utils';
import {
	StatusResponse,
	UserProfileProto,
	IdRequest,
	ProfileListResponse,
} from 'src/generated/common_pb';
import {
	BulkGetProfileRequest,
	CreateProfileRequest,
	FetchProfilesRequest,
	Userfilters,
	ProfileImageUploadRequest,
	ProfileImageUploadURL
} from 'src/generated/profile_pb';
import { ProfileClient } from 'src/generated/ProfileServiceClientPb';
import { IFetchProfiles, IUserProfile } from 'src/types/index';

const getProfileClient = (() => {
	const authURL = process.env.REACT_APP_AUTH_URL;
	let client: ProfileClient;
	if (authURL) {
		client = new ProfileClient(authURL);
	}
	return () => {
		return client;
	};
})();

const getBulkProfileRequest = (userIds: string[]) => {
	const bulkGetProfileRequest = new BulkGetProfileRequest();
	bulkGetProfileRequest.setUseridsList(userIds);
	return bulkGetProfileRequest;
};

const getCreateProfileRequest = (userProfile: IUserProfile) => {
	const createProfileRequest = new CreateProfileRequest();
	if (userProfile.gender) {
		createProfileRequest.setGender(userProfile.gender);
	}
	if (userProfile.name) {
		createProfileRequest.setName(userProfile.name);
	}
	if (userProfile.photoUrl) {
		createProfileRequest.setPhotourl(userProfile.photoUrl);
	}
	if (userProfile.attributesList) {
		createProfileRequest.setAttributesList(userProfile.attributesList);
	}
	if (userProfile.preferredLanguage) {
		createProfileRequest.setPreferredlanguage(userProfile.preferredLanguage);
	}
	return createProfileRequest;
};

const getFetchProfilesRequest = (fetchprofiles: IFetchProfiles) => {
	const fetchprofilesrequest = new FetchProfilesRequest();
	if (fetchprofiles.filters) {
		const filters = new Userfilters();
		filters.setFarmingtype(fetchprofiles.filters.farmintType || 0);
		filters.setGender(fetchprofiles.filters.gender || 0);
		filters.setLandsizeinacres(fetchprofiles.filters.landSizeInAcres || 0);
		filters.setName(fetchprofiles.filters.name || '');
		filters.setYearssinceorganicfarming(fetchprofiles.filters.yearsSinceOrganicFarming || 0);
		fetchprofilesrequest.setFilters(filters);
	}
	fetchprofilesrequest.setPagenumber(fetchprofiles.pageNumber || 0);
	fetchprofilesrequest.setPagesize(fetchprofiles.pageSize || 0);
	return fetchprofilesrequest;
};

const getIdRequest = (userId: string) => {
	const idRequest = new IdRequest();
	idRequest.setUserid(userId);
	return idRequest;
};

const getProfileImageUploadUrl = (mediaExtension: string) => {
	const mediaUploadRequest = new ProfileImageUploadRequest();
	mediaUploadRequest.setMediaextension(mediaExtension);
	return mediaUploadRequest;
}

const profileClient = {
	BulkGetProfileByIds: (userIds: string[], metaData: Metadata | null, callback: (err: RpcError, response: ProfileListResponse) => void) => {
		getProfileClient().bulkGetProfileByIds(getBulkProfileRequest(userIds), addJwtToken(metaData), callback);
	},
	CreateOrUpdateProfile: (userProfile: IUserProfile, metaData: Metadata | null, callback: (err: RpcError, response: UserProfileProto) => void) => {
		getProfileClient().createOrUpdateProfile(getCreateProfileRequest(userProfile), addJwtToken(metaData), callback);
	},
	FetchProfiles: (fetchprofiles: IFetchProfiles, metaData: Metadata | null, callback: (err: RpcError, reponse: ProfileListResponse) => void) => {
		getProfileClient().fetchProfiles(getFetchProfilesRequest(fetchprofiles), addJwtToken(metaData), callback);
	},
	GetProfileByID: (userId: string, metaData: Metadata | null, callback: (err: RpcError, response: UserProfileProto) => void) => {
		getProfileClient().getProfileById(getIdRequest(userId), addJwtToken(metaData), callback);
	},
	GetProfileImageUploadURL: (mediaExtension: string, metaData: Metadata | null, callback: (err: RpcError, response: ProfileImageUploadURL) => void) => {
		getProfileClient().getProfileImageUploadUrl(getProfileImageUploadUrl(mediaExtension), addJwtToken(metaData), callback);
	}
};

export default profileClient;