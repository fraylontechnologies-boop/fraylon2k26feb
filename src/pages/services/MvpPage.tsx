import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const MvpPage = () => {
    return <ServiceLayout data={servicesData['mvp-development']} />;
};

export default MvpPage;
