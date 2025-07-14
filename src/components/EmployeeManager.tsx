import React, { useState, useEffect } from "react";
import type { EmployeeFormData } from "./EmployeeForm";
import EmployeeForm from "./EmployeeForm";
import EmployeeGrid from "./EmployeeGrid";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const EmployeeManager: React.FC = () => {
  const [employees, setEmployees] = useState<EmployeeFormData[]>([]);

  useEffect(() => {
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  if (userId) {
    emailjs.init(userId);
  }
    const stored = localStorage.getItem("employees");
    if (stored) {
      setEmployees(JSON.parse(stored));
    }
  }, []);

  const handleAddEmployee = (employee: EmployeeFormData) => {
  console.log("Employee Data:", employee);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;

  if (!serviceId || !templateId || !userId) {
    console.error("Missing EmailJS environment variables.");

     Swal.fire({
      icon: "error",
      title: "Configuration Error",
      text: "Email service is not configured properly.",
    });
    return;
  }

  const templateParams = {
    name: employee.name,
    email: employee.email,
    phone: employee.phone || "N/A",
    role: employee.role,
    joining_date: employee.joiningDate,
  };

  emailjs.init(userId);

  emailjs
    .send(serviceId, templateId, templateParams)
    .then((response) => {
      console.log("Email sent successfully!", response);

        Swal.fire({
        icon: "success",
        title: "Employee Added!",
        text: "Email sent successfully and employee has been added.",
        showConfirmButton: false,
        timer: 2000,
      });
      const updated = [...employees, employee];
      setEmployees(updated);
      localStorage.setItem("employees", JSON.stringify(updated));
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Employee not added.");
    });
};



  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <EmployeeForm onSubmitEmployee={handleAddEmployee} />
      <div className="mt-10 max-w-6xl mx-auto px-4">
        <EmployeeGrid employees={employees} />
      </div>
    </div>
  );
};

export default EmployeeManager;
