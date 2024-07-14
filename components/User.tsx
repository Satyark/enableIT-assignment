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
      <h2 className="text-black font-bold break-words">{name}</h2>
      <p className="text-gray-600 break-words">Job Title: {job}</p>
      <p className="text-gray-600 break-words">Company: {company}</p>
      <p className="text-gray-600 break-words">Phone: {phone}</p>
      <p className="text-gray-600 break-words">Email: {email}</p>
      <p className="text-gray-600 break-words">Email Address: {EmailAddress}</p>
      </div>
  
  );
};

export default User;