import Case from '../Case/Case';
const CASES_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Cases = () => {
  return (
    <>
      {CASES_LIST.map(x => {
        return <Case />;
      })}
    </>
  );
};

export default Cases;
