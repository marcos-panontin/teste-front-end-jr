import CategoryCard from './CategoryCard';
import Tech from '../../assets/icons/Tech.svg';
import Supermarket from '../../assets/icons/Supermarket.svg';
import Drinks from '../../assets/icons/Drinks.svg';
import Tools from '../../assets/icons/Tools.svg';
import Health from '../../assets/icons/Health.svg';
import Sport from '../../assets/icons/Sport.svg';
import Fashion from '../../assets/icons/Fashion.svg';

const categories = [
  {
    category: 'Tecnologia',
    imageURL: Tech
  },
  {
    category: 'Supermercado',
    imageURL: Supermarket
  },
  {
    category: 'Bebidas',
    imageURL: Drinks
  },
  {
    category: 'Ferramentas',
    imageURL: Tools
  },
  {
    category: 'Saúde',
    imageURL: Health
  },
  {
    category: 'Esportes e Fitness',
    imageURL: Sport
  },
  {
    category: 'Moda',
    imageURL: Fashion
  }
];

export default function Categories() {
  return (
    <section className='main__categories'>
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))
        }
    </section>
  )
}
