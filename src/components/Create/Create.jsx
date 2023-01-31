import * as S from './style';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();

  const getDate = () => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;

    return year + '-' + month + '-' + day;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.type === 'submit') {
      let id;

      !localStorage.length
        ? (id = 0)
        : (id = Number(Object.keys(localStorage).sort().pop()) + 1);

      const task = JSON.stringify({
        name: e.target[0].value,
        description: e.target[1].value,
        date: e.target[2].value,
      });

      localStorage.setItem(id, task);
    }
    navigate('/');
  };

  return (
    <S.Content>
      <S.H1>Create a New Task</S.H1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="task-name">Task name:</label>
        <S.Input type="text" id="task-name" required />

        <label htmlFor="description">Description:</label>
        <S.Textarea id="description" required />

        <label htmlFor="date">Date created:</label>
        <S.Input type="date" id="date" value={getDate()} readOnly />

        <S.Div>
          <S.InputButton
            background="#FD151B"
            type="button"
            value="Cancel"
            onClick={handleSubmit}
          />
          <S.InputButton background="#16DB93" type="submit" value="Save" />
        </S.Div>
      </form>
    </S.Content>
  );
};

export default Create;
