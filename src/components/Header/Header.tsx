import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import ProfileIcon from '../../assets/images/icons/ProfileIcon.png';
import SettingsIcon from '../../assets/images/icons/SettingsIcon.png';
import FindUsersIcon from '../../assets/images/icons/FindUsersIcon.png';
import MusicIcon from '../../assets/images/icons/MusicIcon.png';
import NewsIcon from '../../assets/images/icons/NewsIcon.png';
import MessagesIcon from '../../assets/images/icons/MessagesIcon.png';
import LogOut from '../../assets/images/icons/LogOut.png';
import { useAppDispatch, useAppSelector } from '../../hook/hook';
import { toggleToken } from '../../store/slices/authSlice';
import { setId } from '../../store/slices/profileSlice';

const Header:React.FC = () => {
  const { isAuth, authLogin, authId } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const onProfile = () => {
    dispatch(setId(authId));
  };
  if (isAuth) {
    return (
      <div className={styles.nav}>
        <NavLink to={`/profile/${authLogin}`} className={styles.item} onClick={onProfile}>
          <img className={styles.icon} src={ProfileIcon} alt="ProfileIcon" />
        </NavLink>
        <NavLink to="/dialogs" className={styles.item}>
          <img className={styles.icon} src={MessagesIcon} alt="MessagesIcon" />
        </NavLink>
        <NavLink to="#" className={styles.item}>
          <img className={styles.icon} src={NewsIcon} alt="NewsIcon" />
        </NavLink>
        <NavLink to="#" className={styles.item}>
          <img className={styles.icon} src={MusicIcon} alt="MusicIcon" />
        </NavLink>
        <NavLink to="/settings" className={styles.item}>
          <img className={styles.icon} src={SettingsIcon} alt="SettingsIcon" />
        </NavLink>
        <NavLink to="/users" className={styles.item}>
          <img className={styles.icon} src={FindUsersIcon} alt="FindUsersIcon" />
        </NavLink>
        <div
          className={styles.logout}
          onClick={() => {
            dispatch(toggleToken());
          }}
        >
          <img
            className={styles.icon}
            src={LogOut}
            alt="LogOut"
          />
        </div>
      </div>
    );
  }
  return <div />;
};
export default Header;
