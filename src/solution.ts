
 //Ans-1

function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier === undefined) {
        return value * 2;
    }

    return value * multiplier;
}

console.log(multiplyValue(10));    
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));

 //Ans-2

function processInput(value: string | number | boolean): string | number {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    } 
    else if (typeof value === "number") {
        return value * 10;
    } 
    else {
        return value ? "Active" : "Inactive";
    }
}

console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));



//Ans-3


function formatCoordinate(
    coordinate: readonly [number, number, string]
): string {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));


//Ans-4

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

// Function calls
console.log(concatenateArrays(["a", "b"], ["c", "d"]));

console.log(concatenateArrays([1, 2], [3, 4], [5]));


// Ans-5

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    return courses.filter((course) => {
        return course.isPublished === true && course.students >= minStudents;
    });
}

// Sample Input
const courses: Course[] = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 80));



// Ans-6

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
    return items.map((item) => item[key]);
}

// Sample Input
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];

console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));


// Ans-7

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

// Sample Input
const manager = new Manager("Alice", 50000, "Engineering");

console.log(manager.getDetails());
console.log(manager.getRoleInfo());


// Ans-8

function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
}

// Sample Input 1
validateAgeAsync(20)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));

// Sample Input 2
validateAgeAsync(15)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));




















