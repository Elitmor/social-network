import style from './message.module.css';

type MessagePropsType = {
  message: string;
};

export const Message = (props: MessagePropsType) => {
  return (
    <>
      <div className={style.message}>{props.message}</div>
    </>
  );
};
