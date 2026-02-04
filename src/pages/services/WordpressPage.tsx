import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const WordpressPage = () => {
    return <ServiceLayout data={servicesData['wordpress']} />;
};

export default WordpressPage;
