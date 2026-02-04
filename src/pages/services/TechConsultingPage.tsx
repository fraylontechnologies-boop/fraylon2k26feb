import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const TechConsultingPage = () => {
    return <ServiceLayout data={servicesData['tech-consulting']} />;
};

export default TechConsultingPage;
