import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const AiAgentsPage = () => {
    return <ServiceLayout data={servicesData['ai-agents']} />;
};

export default AiAgentsPage;
