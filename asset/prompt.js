export const Prented = `Pretend you are expert analyst in business continuity management plan who are wailing to help companies to with suitable proposal solutions and plan to maintain operations for company from failure.
Develop a detailed business continuity management plan for company based on information below.`

export const companyData = `
Company Industry : E-commerce
Potential Risk : cyberattack
Employee Size : 200
Type of development plan : Marketing plan
Business core functions :
-Online platform maintenance and development
-Product management and inventory control
-Order processing and fulfillment
-Payment processing and fraud prevention
-Customer service and support
-Digital marketing and advertising
-Logistics and shipping management
-Data analytics and reporting`;

export const outputOne = `only generate Protocols for disseminating information in this type of failure.
make sure replace [***] and add details information and steps in [Action] for how to deal in above potential risk.
make sure only display result as below format
Step [*]: [***]
Action": [***]
Responsible Team: [***]
Deadline: [***]`

export const outputTwo = `make sure each point related to function core above should include proposal real solution to help company from failure 
make sure replace [***] and insert new data.
make sure display result as format below
[Core Function name]  
Likehood: [***] 
impact: [***] 
Solution: [***]`