import './App.css';

const bandNames = [
  {
    name: 'Dire Straits',
    members: 'Mark Knowflew, David Knopfler, John Illsley, Pick WIthers',
    formed: 1977,
  },
  {
    name: 'R.E.M.',
    members: 'Michael Stipe, Peter Buck, Mike Mills, Bill Berry',
    formed: 1980,
  },
  {
    name: 'Collective Soul',
    members: 'Ed Roland, Dean Roland, David Neal, Ross Childress, Shane Evans',
    formed: 1992,
  },
];

function Welcome() {
  return <h1>Criminally Underrated Bands..</h1>;
}

function Band({
  name,
  members,
  formed,
}: {
  name: string;
  members: string;
  formed: number;
}) {
  return (
    <>
      <h2>{name}</h2>
      <h3>Members: {members}</h3>
      <h3>Formed: {formed}</h3>
    </>
  );
}

function BandList() {
  return (
    <>
      {bandNames.map((band) => (
        <Band {...band} />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <BandList />
    </>
  );
}

export default App;
