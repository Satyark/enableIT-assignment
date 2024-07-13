import axios from "axios";
import { useEffect, useState } from "react";

interface User {
    ID: string;
    JobTitle: string;
    EmailAddress: string;
    FirstNameLastName: string;
    Email: string;
    Phone: string;
    Company: string;
  }

interface UseUsersResult {
    users: User[];
    currentPage: number;
    totalPages: number;
    handleNext: () => void;
    handlePrev: () => void;
    handlePageClick: (page: number) => void;
    loading: boolean;
    error: string | null;
    pages: number[];
  }

  const useUsers = (initialPage: number = 1): UseUsersResult =>{
    const [users, setUsers]= useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading]= useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchUsers = async ()=>{
            setLoading(true);
            setError(null);

            try{
                const response= await axios.get(`https://give-me-users-forever.vercel.app/api/users/${currentPage}/next`);
                setUsers(response.data.users);
                setTotalPages(20)
            }catch(err){
                setError("Failed to fetch");
            }finally{
                setLoading(false);
            }
        };
        fetchUsers();
    },[currentPage])

    const handleNext = () => {
        if (currentPage < totalPages) {
          setCurrentPage((prevPage) => prevPage + 1);
          setTotalPages(currentPage+1)
        }
      };
    
      const handlePrev = () => {
        if (currentPage > 1) {
          setCurrentPage((prevPage) => prevPage - 1);
        }
      };

      const handlePageClick = (page: number) => {
        setCurrentPage(page);
      };

      const calculatePages = (): number[] => {
        const pagesToShow = 7;
        const pages: number[] = [];
        let startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
        let endPage = Math.min(startPage + pagesToShow - 1, totalPages);
    
        if (endPage - startPage < pagesToShow - 1) {
          startPage = Math.max(endPage - pagesToShow + 1, 1);
        }
    
        for (let i = startPage; i <= endPage; i++) {
          pages.push(i);
        }
    
        return pages;
      };
    

      return {
        users,
        currentPage,
        totalPages,
        handleNext,
        handlePrev,
        handlePageClick,
        loading,
        error,
        pages: calculatePages(),
      };
  }

  export default useUsers;