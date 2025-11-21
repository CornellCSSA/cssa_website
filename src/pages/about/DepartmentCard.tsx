import { DepartmentDataObject } from './departmentType';

export default function DepartmentCard({ departmentData }: { departmentData: DepartmentDataObject }) {
    return (
        <div className="department-card">
            <img src={departmentData.image} alt={departmentData.name} className="department-image" />
            <div className="department-content">
                <h3 className="department-name">{departmentData.name}</h3>
                <p className="department-description">{departmentData.description}</p>
            </div>
        </div>
    );
}