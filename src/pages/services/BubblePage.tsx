import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const BubblePage = () => {
    return <ServiceLayout data={servicesData['bubble']} />;
};

export default BubblePage;
