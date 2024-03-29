// Copyright 2022-2023 @Kotlang/navachaar-admin-portal authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from 'src/Screens/Users/index';
import UserDetails from 'src/Screens/Users/userDetails';
const UserMiddleware = () => {
	return (

		<Routes>
			<Route path='/' element={<Users />} />
			<Route path="/userdetails/:userId/:phone" element={<UserDetails />} />
		</Routes>

	);
};

export default UserMiddleware;