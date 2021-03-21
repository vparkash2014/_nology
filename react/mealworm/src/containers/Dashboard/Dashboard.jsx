import CardList from '../../components/CardList';

const Dashboard = ({ recipes, toggleFav }) => {
    return <CardList recipes={recipes} toggleFav={toggleFav} />;
}

export default Dashboard;