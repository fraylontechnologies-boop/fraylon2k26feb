import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const SeoPage = () => {
    return <ServiceLayout data={servicesData['seo']} />;
};

export default SeoPage;
