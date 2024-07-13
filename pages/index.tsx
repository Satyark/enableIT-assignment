import User from '../components/User';
import Pagination from '../components/Pagination';
import useUsers from '../hooks/useUsers';

const Home: React.FC = () => {
  const { users, currentPage, totalPages, handleNext, handlePrev, handlePageClick, loading, error, pages } = useUsers();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">User List</h1>
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4">
      {users.map((user) => (
        <User key={user.ID} id={user.ID} 
        name={user.FirstNameLastName} 
        email={user.Email} 
        EmailAddress={user.EmailAddress}
        job={user.JobTitle}
        phone={user.Phone}
        company={user.Company}
        />
      ))}
      </div>
      <Pagination 
        page={currentPage} 
        totalPages={totalPages} 
        handlePrev={handlePrev} 
        handleNext={handleNext} 
        handlePageClick={handlePageClick}
        pages={pages} 
      />
    </div>
  );
};

export default Home;
