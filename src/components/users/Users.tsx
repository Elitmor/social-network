import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, follow, unfollow } from '../../redux/users-reducer';
import {
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from '../../redux/users-selectors';
import { UsersType } from '../../types/types';
import { Paginator } from '../common/paginator/Paginator';
import { Preloader } from '../common/preloader/Preloader';
import { User } from './User';

type PropsType = {
  pageTitle: string;
};

export const Users: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch();
  const isFetching = useSelector(getIsFetching);
  const users = useSelector(getUsers);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);
  const followingProgress = useSelector(getFollowingProgress);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchUsers(currentPage, pageSize));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageClick = (page: number) => {
    // @ts-ignore
    dispatch(fetchUsers(page, pageSize));
  };

  return (
    <div>
      <h2>{props.pageTitle}</h2>
      {isFetching ? <Preloader /> : null}
      <Paginator
        currentPage={currentPage}
        // @ts-ignore
        pagesCount={totalUsersCount}
        onPageChanged={handlePageClick}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map((user: UsersType) => (
        <User
          key={user.id}
          user={user}
          followingProgress={followingProgress}
          unfollowUser={unfollow}
          followUser={follow}
        />
      ))}
    </div>
  );
};