export const HomePage = () => {
  return (
    <>
      <section id="board-header">
        <h3>Name of the board</h3>
      </section>
      <section id="list-section">
        <List data={data} />
        <List data={data2} />
      </section>
    </>
  );
};
