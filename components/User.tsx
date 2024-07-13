import React from 'react';

interface UserProps {
  id: string;
  job: string;
  name: string;
  EmailAddress: string,
  email: string;
  phone: string;
  company: string;
}

const User: React.FC<UserProps> = ({ id, name, email, EmailAddress, job, phone, company }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
      <h2 className="text-black font-bold">{name}</h2>
      <p className="text-gray-600">Job Title: {job}</p>
      <p className="text-gray-600">Company: {company}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Email Address: {EmailAddress}</p>
      </div>
  
  );
};

export default User;