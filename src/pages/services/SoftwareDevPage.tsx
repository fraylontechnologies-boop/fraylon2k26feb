import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const SoftwareDevPage = () => {
    return <ServiceLayout data={servicesData['software-dev']} />;
};

export default SoftwareDevPage;
