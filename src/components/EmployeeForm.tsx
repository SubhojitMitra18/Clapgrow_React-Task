import { useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Enter a valid email address." }),
  phone: z.string().optional(),
  role: z.enum(["Developer", "Designer", "Manager"]),
  joiningDate: z.string(),
});

export type EmployeeFormData = z.infer<typeof formSchema>;

const EmployeeForm: React.FC<{ onSubmitEmployee: (data: EmployeeFormData) => void }> = ({
  onSubmitEmployee,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<EmployeeFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "Developer",
    },
  });

  const roleValue = watch("role");

  useEffect(() => {
    if (!roleValue) {
      setValue("role", "Developer");
    }
  }, [roleValue, setValue]);

  const onSubmit = (data: EmployeeFormData) => {
    console.log("Form submit triggered", data);
    onSubmitEmployee(data);
    reset();
  };

  return (
    <Card className="max-w-xl mx-auto mt-12 shadow-2xl rounded-2xl border border-gray-100 bg-gradient-to-r from-white via-gray-50 to-white p-6">
      <CardHeader className="text-center mb-4">
        <CardTitle className="text-3xl font-bold text-gray-800">Add New Employee</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6">

          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-600">
              Name
            </label>
            <Input
              id="name"
              placeholder="Your Name"
              {...register("name")}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.name && (
              <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-600">
              Email
            </label>
            <Input
              id="email"
              placeholder="abc@example.com"
              {...register("email")}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.email && (
              <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 text-sm font-medium text-gray-600">
              Phone (Optional)
            </label>
            <Input
              id="phone"
              placeholder="(123) 456-7890"
              {...register("phone")}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="role" className="mb-2 text-sm font-medium text-gray-600">
              Role
            </label>
            <Select
              value={roleValue}
              onValueChange={(value) => setValue("role", value as EmployeeFormData["role"])}
            >
              <SelectTrigger className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                {["Developer", "Designer", "Manager"].map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.role && (
              <p className="text-xs text-red-400 mt-1">{errors.role.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="joiningDate" className="mb-2 text-sm font-medium text-gray-600">
              Joining Date
            </label>
            <Input
              id="joiningDate"
              type="date"
              {...register("joiningDate")}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.joiningDate && (
              <p className="text-xs text-red-400 mt-1">{errors.joiningDate.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold rounded-xl shadow-md transition cursor-pointer"
          >
            Add Employee
          </Button>

        </form>
      </CardContent>
    </Card>
  );
};

export default EmployeeForm;
