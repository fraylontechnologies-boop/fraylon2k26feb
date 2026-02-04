import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const NlpPage = () => {
    return <ServiceLayout data={servicesData['nlp']} />;
};

export default NlpPage;
