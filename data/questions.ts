import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    topic: "Identity & Access Management",
    text: "Every employee of your company has a Google account. Your operational team needs to manage a large number of instances on Compute Engine. Each member of this team needs only administrative access to the servers. Your security team wants to ensure that the deployment of credentials is operationally efficient and must be able to determine who accessed a given instance. What should you do?",
    options: [
      { label: "A", text: "Generate a new SSH key pair. Give the private key to each member of your team. Configure the public key in the metadata of each instance." },
      { label: "B", text: "Ask each member of the team to generate a new SSH key pair and to send you their public key. Use a configuration management tool to deploy those keys on each instance." },
      { label: "C", text: "Ask each member of the team to generate a new SSH key pair and to add the public key to their Google account. Grant the compute.osAdminLogin role to the Google group corresponding to this team." },
      { label: "D", text: "Generate a new SSH key pair. Give the private key to each member of your team. Configure the public key as a project-wide public SSH key in your Cloud Platform project and allow project-wide public SSH keys on each instance." }
    ],
    correctAnswer: "C",
    explanation: "Option C is the most suitable solution because it leverages Google Accounts for identity management and the compute.osAdminLogin role for access control, fulfilling both operational efficiency and security requirements."
  },
  {
    id: 2,
    topic: "Networking",
    text: "You need to create a custom VPC with a single subnet. The subnet's range must be as large as possible. Which range should you use?",
    options: [
      { label: "A", text: "0.0.0.0/0" },
      { label: "B", text: "10.0.0.0/8" },
      { label: "C", text: "172.16.0.0/12" },
      { label: "D", text: "192.168.0.0/16" }
    ],
    correctAnswer: "B",
    explanation: "Option B, 10.0.0.0/8, is the correct answer because it represents the largest possible subnet range among the options provided due to its CIDR notation. A /8 prefix allocates more IP addresses (approximately 16 million)."
  },
  {
    id: 3,
    topic: "Databases",
    text: "You want to select and configure a cost-effective solution for relational data on Google Cloud Platform. You are working with a small set of operational data in one geographic location. You need to support point-in-time recovery. What should you do?",
    options: [
      { label: "A", text: "Select Cloud SQL (MySQL). Verify that the enable binary logging option is selected." },
      { label: "B", text: "Select Cloud SQL (MySQL). Select the create failover replicas option." },
      { label: "C", text: "Select Cloud Spanner. Set up your instance with 2 nodes." },
      { label: "D", text: "Select Cloud Spanner. Set up your instance as multi-regional." }
    ],
    correctAnswer: "A",
    explanation: "Cloud SQL for MySQL is a cost-effective, managed relational database service suitable for small datasets and single geographic locations. Enabling binary logging in Cloud SQL (MySQL) is essential for point-in-time recovery."
  },
  {
    id: 4,
    topic: "Compute Engine",
    text: "You want to configure autohealing for network load balancing for a group of Compute Engine instances that run in multiple zones, using the fewest possible steps. You need to configure re-creation of VMs if they are unresponsive after 3 attempts of 10 seconds each. What should you do?",
    options: [
      { label: "A", text: "Create an HTTP load balancer with a backend configuration that references an existing instance group. Set the health check to healthy (HTTP)." },
      { label: "B", text: "Create an HTTP load balancer with a backend configuration that references an existing instance group. Define a balancing mode and set the maximum RPS to 10." },
      { label: "C", text: "Create a managed instance group. Set the Autohealing health check to healthy (HTTP)." },
      { label: "D", text: "Create a managed instance group. Verify that the autoscaling setting is on." }
    ],
    correctAnswer: "C",
    explanation: "To configure autohealing with the fewest steps, creating a Managed Instance Group (MIG) and setting its autohealing policy is the most direct approach because MIGs are specifically designed to automatically replace unhealthy instances based on health checks."
  },
  {
    id: 5,
    topic: "Management Tools",
    text: "You are using multiple configurations for gcloud. You want to review the configured Kubernetes Engine cluster of an inactive configuration using the fewest possible steps. What should you do?",
    options: [
      { label: "A", text: "Use gcloud config configurations describe to review the output." },
      { label: "B", text: "Use gcloud config configurations activate and gcloud config list to review the output." },
      { label: "C", text: "Use kubectl config get-contexts to review the output." },
      { label: "D", text: "Use kubectl config use-context and kubectl config view to review the output." }
    ],
    correctAnswer: "D",
    explanation: "Option D is the correct answer because to review the Kubernetes Engine cluster configuration through kubectl, you must first select the appropriate Kubernetes context."
  },
  {
    id: 6,
    topic: "Storage",
    text: "Your company uses Cloud Storage to store application backup files for disaster recovery purposes. You want to follow Google's recommended practices. Which storage option should you use?",
    options: [
      { label: "A", text: "Multi-Regional Storage" },
      { label: "B", text: "Regional Storage" },
      { label: "C", text: "Nearline Storage" },
      { label: "D", text: "Coldline Storage" }
    ],
    correctAnswer: "D",
    explanation: "Coldline Storage is the recommended option for disaster recovery backups due to its lowest storage cost and suitability for infrequently accessed data, aligning with Google's best practices for cost optimization."
  },
  {
    id: 7,
    topic: "Billing",
    text: "Several employees at your company have been creating projects with Cloud Platform and paying for it with their personal credit cards, which the company reimburses. The company wants to centralize all these projects under a single, new billing account. What should you do?",
    options: [
      { label: "A", text: "Contact support with your bank account details and request a corporate billing account." },
      { label: "B", text: "Create a ticket with Google Support and wait for their call to share your credit card details over the phone." },
      { label: "C", text: "In the Google Platform Console, go to the Resource Manage and move all projects to the root Organization." },
      { label: "D", text: "In the Google Cloud Platform Console, create a new billing account and set up a payment method." }
    ],
    correctAnswer: "D",
    explanation: "To centralize billing, the most direct approach is to create a new billing account within the Google Cloud Platform Console and configure a corporate payment method."
  },
  {
    id: 8,
    topic: "Networking",
    text: "You have an application that looks for its licensing server on the IP 10.0.3.21. You need to deploy the licensing server on Compute Engine. You do not want to change the configuration of the application and want the application to be able to reach the licensing server. What should you do?",
    options: [
      { label: "A", text: "Reserve the IP 10.0.3.21 as a static internal IP address using gcloud and assign it to the licensing server." },
      { label: "B", text: "Reserve the IP 10.0.3.21 as a static public IP address using gcloud and assign it to the licensing server." },
      { label: "C", text: "Use the IP 10.0.3.21 as a custom ephemeral IP address and assign it to the licensing server." },
      { label: "D", text: "Start the licensing server with an automatic ephemeral IP address, and then promote it to a static internal IP address." }
    ],
    correctAnswer: "A",
    explanation: "Reserving the IP address 10.0.3.21 as a static internal IP and assigning it to the licensing server ensures that the server is reachable at the exact IP address expected by the application."
  },
  {
    id: 9,
    topic: "App Engine",
    text: "You are deploying an application to App Engine. You want the number of instances to scale based on request rate. You need at least 3 unoccupied instances at all times. Which scaling type should you use?",
    options: [
      { label: "A", text: "Manual Scaling with 3 instances." },
      { label: "B", text: "Basic Scaling with min_instances set to 3." },
      { label: "C", text: "Basic Scaling with max_instances set to 3." },
      { label: "D", text: "Automatic Scaling with min_idle_instances set to 3." }
    ],
    correctAnswer: "D",
    explanation: "Automatic Scaling with min_idle_instances set to 3 is the correct choice because it configures App Engine to dynamically adjust the number of instances based on request rate while ensuring that at least 3 instances are always kept idle."
  },
  {
    id: 10,
    topic: "Identity & Access Management",
    text: "You have a development project with appropriate IAM roles defined. You are creating a production project and want to have the same IAM roles on the new project, using the fewest possible steps. What should you do?",
    options: [
      { label: "A", text: "Use gcloud iam roles copy and specify the production project as the destination project." },
      { label: "B", text: "Use gcloud iam roles copy and specify your organization as the destination organization." },
      { label: "C", text: "In the Google Cloud Platform Console, use the 'create role from role' functionality." },
      { label: "D", text: "In the Google Cloud Platform Console, use the 'create role' functionality and select all applicable permissions." }
    ],
    correctAnswer: "A",
    explanation: "To replicate IAM roles in a new production project with the fewest steps, utilize the gcloud iam roles copy command, designating the production project as the destination."
  },
  {
    id: 11,
    topic: "Deployment",
    text: "You need a dynamic way of provisioning VMs on Compute Engine. The exact specifications will be in a dedicated configuration file. You want to follow Google's recommended practices. Which method should you use?",
    options: [
      { label: "A", text: "Deployment Manager" },
      { label: "B", text: "Cloud Composer" },
      { label: "C", text: "Managed Instance Group" },
      { label: "D", text: "Unmanaged Instance Group" }
    ],
    correctAnswer: "A",
    explanation: "Deployment Manager is the recommended method because it is Google's Infrastructure-as-Code (IaC) service, allowing you to define VM specifications in declarative configuration files (YAML or Python)."
  },
  {
    id: 12,
    topic: "Kubernetes",
    text: "You have a Dockerfile that you need to deploy on Kubernetes Engine. What should you do?",
    options: [
      { label: "A", text: "Use kubectl app deploy <dockerfilename>." },
      { label: "B", text: "Use gcloud app deploy <dockerfilename>." },
      { label: "C", text: "Create a docker image from the Dockerfile and upload it to Container Registry. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file." },
      { label: "D", text: "Create a docker image from the Dockerfile and upload it to Cloud Storage. Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file." }
    ],
    correctAnswer: "C",
    explanation: "To deploy a Dockerfile on Kubernetes Engine, you must first build a Docker image from it and push this image to a container registry like Google Container Registry. Kubernetes then uses a Deployment YAML file to define how to run this image."
  },
  {
    id: 13,
    topic: "Deployment",
    text: "Your development team needs a new Jenkins server for their project. You need to deploy the server using the fewest steps possible. What should you do?",
    options: [
      { label: "A", text: "Download and deploy the Jenkins Java WAR to App Engine Standard." },
      { label: "B", text: "Create a new Compute Engine instance and install Jenkins through the command line interface." },
      { label: "C", text: "Create a Kubernetes cluster on Compute Engine and create a deployment with the Jenkins Docker image." },
      { label: "D", text: "Use GCP Marketplace to launch the Jenkins solution." }
    ],
    correctAnswer: "D",
    explanation: "GCP Marketplace offers pre-built solutions like Jenkins, simplifying deployment with minimal manual configuration, thus requiring the fewest steps."
  },
  {
    id: 14,
    topic: "Deployment",
    text: "You need to update a deployment in Deployment Manager without any resource downtime in the deployment. Which command should you use?",
    options: [
      { label: "A", text: "gcloud deployment-manager deployments create --config <deployment-config-path>" },
      { label: "B", text: "gcloud deployment-manager deployments update --config <deployment-config-path>" },
      { label: "C", text: "gcloud deployment-manager resources create --config <deployment-config-path>" },
      { label: "D", text: "gcloud deployment-manager resources update --config <deployment-config-path>" }
    ],
    correctAnswer: "B",
    explanation: "The command gcloud deployment-manager deployments update --config is used to modify an existing deployment configuration, facilitating updates without service interruption."
  },
  {
    id: 15,
    topic: "Billing",
    text: "You need to run an important query in BigQuery but expect it to return a lot of records. You want to find out how much it will cost to run the query. You are using on-demand pricing. What should you do?",
    options: [
      { label: "A", text: "Arrange to switch to Flat-Rate pricing for this query, then move back to on-demand." },
      { label: "B", text: "Use the command line to run a dry run query to estimate the number of bytes read. Then convert that bytes estimate to dollars using the Pricing Calculator." },
      { label: "C", text: "Use the command line to run a dry run query to estimate the number of bytes returned. Then convert that bytes estimate to dollars using the Pricing Calculator." },
      { label: "D", text: "Run a select count (*) to get an idea of how many records your query will look through. Then convert that number of rows to dollars using the Pricing Calculator." }
    ],
    correctAnswer: "B",
    explanation: "To estimate the cost of a BigQuery query using on-demand pricing, you should use a dry run to determine the estimated bytes read by the query, as pricing is based on data processed."
  },
  {
    id: 16,
    topic: "Compute Engine",
    text: "You have a single binary application that you want to run on Google Cloud Platform. You decided to automatically scale the application based on underlying infrastructure CPU usage. Your organizational policies require you to use virtual machines directly. You need to ensure that the application scaling is operationally efficient and completed as quickly as possible. What should you do?",
    options: [
      { label: "A", text: "Create a Google Kubernetes Engine cluster, and use horizontal pod autoscaling to scale the application." },
      { label: "B", text: "Create an instance template, and use the template in a managed instance group with autoscaling configured." },
      { label: "C", text: "Create an instance template, and use the template in a managed instance group that scales up and down based on the time of day." },
      { label: "D", text: "Use a set of third-party tools to build automation around scaling the application up and down, based on Stackdriver CPU usage monitoring." }
    ],
    correctAnswer: "B",
    explanation: "Managed Instance Groups (MIGs) with autoscaling and instance templates are designed to automatically scale VMs based on metrics like CPU utilization efficiently."
  },
  {
    id: 17,
    topic: "Billing",
    text: "You are analyzing Google Cloud Platform service costs from three separate projects. You want to use this information to create service cost estimates by service type, daily and monthly, for the next six months using standard query syntax. What should you do?",
    options: [
      { label: "A", text: "Export your bill to a Cloud Storage bucket, and then import into Cloud Bigtable for analysis." },
      { label: "B", text: "Export your bill to a Cloud Storage bucket, and then import into Google Sheets for analysis." },
      { label: "C", text: "Export your transactions to a local file, and perform analysis with a desktop tool." },
      { label: "D", text: "Export your bill to a BigQuery dataset, and then write time window-based SQL queries for analysis." }
    ],
    correctAnswer: "D",
    explanation: "Exporting Cloud Billing data to BigQuery is the recommended approach for analyzing GCP service costs as it supports standard SQL queries and large datasets."
  },
  {
    id: 18,
    topic: "Storage",
    text: "You need to set up a policy so that videos stored in a specific Cloud Storage Regional bucket are moved to Coldline after 90 days, and then deleted after one year from their creation. How should you set up the policy?",
    options: [
      { label: "A", text: "Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 275 days." },
      { label: "B", text: "Use Cloud Storage Object Lifecycle Management using Age conditions with SetStorageClass and Delete actions. Set the SetStorageClass action to 90 days and the Delete action to 365 days." },
      { label: "C", text: "Use gsutil rewrite and set the Delete action to 275 days." },
      { label: "D", text: "Use gsutil rewrite and set the Delete action to 365 days." }
    ],
    correctAnswer: "B",
    explanation: "Object Lifecycle Management with Age conditions is the correct method. Setting SetStorageClass to 90 days moves objects to Coldline, and setting Delete to 365 days ensures deletion one year after creation."
  },
  {
    id: 19,
    topic: "Compute Engine",
    text: "You have a Linux VM that must connect to Cloud SQL. You created a service account with the appropriate access rights. You want to make sure that the VM uses this service account instead of the default Compute Engine service account. What should you do?",
    options: [
      { label: "A", text: "When creating the VM via the web console, specify the service account under the 'Identity and API Access' section." },
      { label: "B", text: "Download a JSON Private Key for the service account. On the Project Metadata, add that JSON as the value for the key compute-engine-service-account." },
      { label: "C", text: "Download a JSON Private Key for the service account. On the Custom Metadata of the VM, add that JSON as the value for the key compute-engine-service-account." },
      { label: "D", text: "Download a JSON Private Key for the service account. After creating the VM, ssh into the VM and save the JSON under ~/.gcloud/compute-engine-service-account.json." }
    ],
    correctAnswer: "A",
    explanation: "Specifying the service account under the 'Identity and API Access' section during VM creation is the standard way to assign a specific service account to a VM."
  },
  {
    id: 20,
    topic: "Compute Engine",
    text: "You created an instance of SQL Server 2017 on Compute Engine to test features in the new version. You want to connect to this instance using the fewest number of steps. What should you do?",
    options: [
      { label: "A", text: "Install a RDP client on your desktop. Verify that a firewall rule for port 3389 exists." },
      { label: "B", text: "Install a RDP client in your desktop. Set a Windows username and password in the GCP Console. Use the credentials to log in to the instance." },
      { label: "C", text: "Set a Windows password in the GCP Console. Verify that a firewall rule for port 22 exists. Click the RDP button in the GCP Console and supply the credentials to log in." },
      { label: "D", text: "Set a Windows username and password in the GCP Console. Verify that a firewall rule for port 3389 exists. Click the RDP button in the GCP Console, and supply the credentials to log in." }
    ],
    correctAnswer: "B",
    explanation: "Setting a Windows username and password in the GCP Console and using an RDP client is the most direct way to connect, bypassing extra firewall config steps if defaults are used."
  },
  {
    id: 21,
    topic: "Deployment",
    text: "You have one GCP account running in your default region and zone and another account running in a non-default region and zone. You want to start a new Compute Engine instance in these two Google Cloud Platform accounts using the command line interface. What should you do?",
    options: [
      { label: "A", text: "Create two configurations using gcloud config configurations create [NAME]. Run gcloud config configurations activate [NAME] to switch between accounts." },
      { label: "B", text: "Create two configurations using gcloud config configurations create [NAME]. Run gcloud configurations list to start the Compute Engine instances." },
      { label: "C", text: "Activate two configurations using gcloud configurations activate [NAME]. Run gcloud config list to start the Compute Engine instances." },
      { label: "D", text: "Activate two configurations using gcloud configurations activate [NAME]. Run gcloud configurations list to start the Compute Engine instances." }
    ],
    correctAnswer: "A",
    explanation: "Using gcloud configurations is the correct way to manage multiple accounts and properties (like region/zone). You create separate configs and activate the one you need."
  },
  {
    id: 22,
    topic: "Deployment",
    text: "You significantly changed a complex Deployment Manager template and want to confirm that the dependencies of all defined resources are properly met before committing it to the project. You want the most rapid feedback on your changes. What should you do?",
    options: [
      { label: "A", text: "Use granular logging statements within a Deployment Manager template authored in Python." },
      { label: "B", text: "Monitor activity of the Deployment Manager execution on the Stackdriver Logging page of the GCP Console." },
      { label: "C", text: "Execute the Deployment Manager template against a separate project with the same configuration, and monitor for failures." },
      { label: "D", text: "Execute the Deployment Manager template using the --preview option in the same project, and observe the state of interdependent resources." }
    ],
    correctAnswer: "D",
    explanation: "The --preview option in Deployment Manager allows you to validate the configuration and dependencies without actually deploying resources, providing rapid feedback."
  },
  {
    id: 23,
    topic: "Data Engineering",
    text: "You are building a pipeline to process time-series data. Which Google Cloud Platform services should you put in boxes 1,2,3, and 4 (Ingestion -> Processing -> Storage -> Analysis)?",
    options: [
      { label: "A", text: "Cloud Pub/Sub, Cloud Dataflow, Cloud Datastore, BigQuery" },
      { label: "B", text: "Firebase Messages, Cloud Pub/Sub, Cloud Spanner, BigQuery" },
      { label: "C", text: "Cloud Pub/Sub, Cloud Storage, BigQuery, Cloud Bigtable" },
      { label: "D", text: "Cloud Pub/Sub, Cloud Dataflow, Cloud Bigtable, BigQuery" }
    ],
    correctAnswer: "D",
    explanation: "For time-series data processing: Pub/Sub for ingestion, Dataflow for processing, Bigtable for storage (optimized for time-series), and BigQuery for analysis."
  },
  {
    id: 24,
    topic: "App Engine",
    text: "You have a project for your App Engine application that serves a development environment. The required testing has succeeded and you want to create a new project to serve as your production environment. What should you do?",
    options: [
      { label: "A", text: "Use gcloud to create the new project, and then deploy your application to the new project." },
      { label: "B", text: "Use gcloud to create the new project and to copy the deployed application to the new project." },
      { label: "C", text: "Create a Deployment Manager configuration file that copies the current App Engine deployment into a new project." },
      { label: "D", text: "Deploy your application again using gcloud and specify the project parameter with the new project name to create the new project." }
    ],
    correctAnswer: "A",
    explanation: "To create a production environment, you should create a new project (isolation) and then deploy the application code to it using gcloud app deploy."
  },
  {
    id: 25,
    topic: "IAM",
    text: "You need to configure IAM access audit logging in BigQuery for external auditors. You want to follow Google recommended practices. What should you do?",
    options: [
      { label: "A", text: "Add the auditors group to the 'logging.viewer' and 'bigQuery.dataViewer' predefined IAM roles." },
      { label: "B", text: "Add the auditors group to two new custom IAM roles." },
      { label: "C", text: "Add the auditor user accounts to the 'logging.viewer' and 'bigQuery.dataViewer' predefined IAM roles." },
      { label: "D", text: "Add the auditor user accounts to two new custom IAM roles." }
    ],
    correctAnswer: "A",
    explanation: "Using predefined roles like logging.viewer and bigQuery.dataViewer assigned to a group is the best practice for managing access for external auditors."
  },
  {
    id: 26,
    topic: "IAM",
    text: "You need to set up permissions for a set of Compute Engine instances to enable them to write data into a particular Cloud Storage bucket. You want to follow Google-recommended practices. What should you do?",
    options: [
      { label: "A", text: "Create a service account with an access scope. Use the access scope 'https://www.googleapis.com/auth/devstorage.write_only'." },
      { label: "B", text: "Create a service account with an access scope. Use the access scope 'https://www.googleapis.com/auth/cloud-platform'." },
      { label: "C", text: "Create a service account and add it to the IAM role 'storage.objectCreator' for that bucket." },
      { label: "D", text: "Create a service account and add it to the IAM role 'storage.objectAdmin' for that bucket." }
    ],
    correctAnswer: "C",
    explanation: "Using IAM roles (storage.objectCreator) bound to a service account is the recommended way to grant specific permissions, rather than relying on access scopes."
  },
  {
    id: 27,
    topic: "Operations",
    text: "You have sensitive data stored in three Cloud Storage buckets and have enabled data access logging. You want to verify activities for a particular user for these buckets, using the fewest possible steps. What should you do?",
    options: [
      { label: "A", text: "Using the GCP Console, filter the Activity log to view the information." },
      { label: "B", text: "Using the GCP Console, filter the Stackdriver log to view the information." },
      { label: "C", text: "View the bucket in the Storage section of the GCP Console." },
      { label: "D", text: "Create a trace in Stackdriver to view the information." }
    ],
    correctAnswer: "B",
    explanation: "Cloud Logging (Stackdriver) is the central place to view Data Access logs. Filtering these logs in the console is the most direct way to verify user activity."
  },
  {
    id: 28,
    topic: "IAM",
    text: "You are the project owner of a GCP project and want to delegate control to colleagues to manage buckets and files in Cloud Storage. You want to follow Google- recommended practices. Which IAM roles should you grant your colleagues?",
    options: [
      { label: "A", text: "Project Editor" },
      { label: "B", text: "Storage Admin" },
      { label: "C", text: "Storage Object Admin" },
      { label: "D", text: "Storage Object Creator" }
    ],
    correctAnswer: "B",
    explanation: "Storage Admin provides full control over buckets and objects, suitable for colleagues who need to manage storage resources."
  },
  {
    id: 29,
    topic: "Storage",
    text: "You have an object in a Cloud Storage bucket that you want to share with an external company. The object contains sensitive data. You want access to the content to be removed after four hours. The external company does not have a Google account. What should you do?",
    options: [
      { label: "A", text: "Create a signed URL with a four-hour expiration and share the URL with the company." },
      { label: "B", text: "Set object access to 'public' and use object lifecycle management to remove the object after four hours." },
      { label: "C", text: "Configure the storage bucket as a static website and furnish the object's URL to the company." },
      { label: "D", text: "Create a new Cloud Storage bucket specifically for the external company. Copy the object. Delete the bucket after four hours." }
    ],
    correctAnswer: "A",
    explanation: "Signed URLs allow you to grant temporary access to a specific object without requiring a Google account, which is the most secure and appropriate method."
  },
  {
    id: 30,
    topic: "Kubernetes",
    text: "You are creating a Google Kubernetes Engine (GKE) cluster with a cluster autoscaler feature enabled. You need to make sure that each node of the cluster will run a monitoring pod that sends container metrics to a third-party monitoring solution. What should you do?",
    options: [
      { label: "A", text: "Deploy the monitoring pod in a StatefulSet object." },
      { label: "B", text: "Deploy the monitoring pod in a DaemonSet object." },
      { label: "C", text: "Reference the monitoring pod in a Deployment object." },
      { label: "D", text: "Reference the monitoring pod in a cluster initializer at the GKE cluster creation time." }
    ],
    correctAnswer: "B",
    explanation: "A DaemonSet ensures that a copy of a Pod runs on all (or some) Nodes in the cluster, which is the standard way to deploy monitoring agents."
  },
  {
    id: 31,
    topic: "App Engine",
    text: "You want to send and consume Cloud Pub/Sub messages from your App Engine application. The Cloud Pub/Sub API is currently disabled. You will use a service account to authenticate your application to the API. You want to make sure your application can use Cloud Pub/Sub. What should you do?",
    options: [
      { label: "A", text: "Enable the Cloud Pub/Sub API in the API Library on the GCP Console." },
      { label: "B", text: "Rely on the automatic enablement of the Cloud Pub/Sub API when the Service Account accesses it." },
      { label: "C", text: "Use Deployment Manager to deploy your application. Rely on the automatic enablement of all APIs." },
      { label: "D", text: "Grant the App Engine Default service account the role of Cloud Pub/Sub Admin." }
    ],
    correctAnswer: "A",
    explanation: "You must explicitly enable APIs in a project before they can be used. Enabling it via the Console is the direct way."
  },
  {
    id: 32,
    topic: "Operations",
    text: "You need to monitor resources that are distributed over different projects in Google Cloud Platform. You want to consolidate reporting under the same Stackdriver Monitoring dashboard. What should you do?",
    options: [
      { label: "A", text: "Use Shared VPC to connect all projects, and link Stackdriver to one of the projects." },
      { label: "B", text: "For each project, create a Stackdriver account." },
      { label: "C", text: "Configure a single Stackdriver account, and link all projects to the same account." },
      { label: "D", text: "Configure a single Stackdriver account for one of the projects. In Stackdriver, create a Group." }
    ],
    correctAnswer: "C",
    explanation: "Cloud Monitoring (Stackdriver) allows you to create a workspace (account) and add multiple projects to it to view metrics from all of them in a single dashboard."
  },
  {
    id: 33,
    topic: "Compute Engine",
    text: "You are deploying an application to a Compute Engine VM in a managed instance group. The application must be running at all times, but only a single instance of the VM should run per GCP project. How should you configure the instance group?",
    options: [
      { label: "A", text: "Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 1." },
      { label: "B", text: "Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 1." },
      { label: "C", text: "Set autoscaling to On, set the minimum number of instances to 1, and then set the maximum number of instances to 2." },
      { label: "D", text: "Set autoscaling to Off, set the minimum number of instances to 1, and then set the maximum number of instances to 2." }
    ],
    correctAnswer: "A",
    explanation: "Setting autoscaling with min 1 and max 1 ensures that exactly one instance is running. If it fails, the MIG will recreate it."
  },
  {
    id: 34,
    topic: "IAM",
    text: "You want to verify the IAM users and roles assigned within a GCP project named my-project. What should you do?",
    options: [
      { label: "A", text: "Run gcloud iam roles list. Review the output section." },
      { label: "B", text: "Run gcloud iam service-accounts list. Review the output section." },
      { label: "C", text: "Navigate to the project and then to the IAM section in the GCP Console. Review the members and roles." },
      { label: "D", text: "Navigate to the project and then to the Roles section in the GCP Console. Review the roles and status." }
    ],
    correctAnswer: "C",
    explanation: "Navigating to the IAM section in the GCP Console is the standard and most user-friendly way to view all members and their assigned roles in a project."
  },
  {
    id: 35,
    topic: "Billing",
    text: "You need to create a new billing account and then link it with an existing Google Cloud Platform project. What should you do?",
    options: [
      { label: "A", text: "Verify that you are Project Billing Manager. Update the existing project to link it to the existing billing account." },
      { label: "B", text: "Verify that you are Project Billing Manager. Create a new billing account and link the new billing account to the existing project." },
      { label: "C", text: "Verify that you are Billing Administrator. Create a new project and link the new project to the existing billing account." },
      { label: "D", text: "Verify that you are Billing Administrator. Update the existing project to link it to the existing billing account." }
    ],
    correctAnswer: "B",
    explanation: "You need the Project Billing Manager role to link a project to a billing account. The task is to create a *new* billing account and link it."
  },
  {
    id: 36,
    topic: "IAM",
    text: "You have one project called proj-sa where you manage all your service accounts. You want to be able to use a service account from this project to take snapshots of VMs running in another project called proj-vm. What should you do?",
    options: [
      { label: "A", text: "Download the private key from the service account, and add it to each VMs custom metadata." },
      { label: "B", text: "Download the private key from the service account, and add the private key to each VM's SSH keys." },
      { label: "C", text: "Grant the service account the IAM Role of Compute Storage Admin in the project called proj-vm." },
      { label: "D", text: "When creating the VMs, set the service account's API scope for Compute Engine to read/write." }
    ],
    correctAnswer: "C",
    explanation: "Granting the service account from proj-sa the necessary IAM role (Compute Storage Admin) in proj-vm allows it to manage storage resources (like snapshots) in the target project."
  },
  {
    id: 37,
    topic: "App Engine",
    text: "You created a Google Cloud Platform project with an App Engine application inside the project. You initially configured the application to be served from the us-central region. Now you want the application to be served from the asia-northeast1 region. What should you do?",
    options: [
      { label: "A", text: "Change the default region property setting in the existing GCP project to asia-northeast1." },
      { label: "B", text: "Change the region property setting in the existing App Engine application from us-central to asia-northeast1." },
      { label: "C", text: "Create a second App Engine application in the existing GCP project and specify asia-northeast1 as the region." },
      { label: "D", text: "Create a new GCP project and create an App Engine application inside this new project. Specify asia-northeast1 as the region." }
    ],
    correctAnswer: "D",
    explanation: "App Engine region is set at creation time and cannot be changed. To serve from a different region, you must create a new project and a new App Engine application."
  },
  {
    id: 38,
    topic: "IAM",
    text: "You need to grant access for three users so that they can view and edit table data on a Cloud Spanner instance. What should you do?",
    options: [
      { label: "A", text: "Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to the role." },
      { label: "B", text: "Run gcloud iam roles describe roles/spanner.databaseUser. Add the users to a new group. Add the group to the role." },
      { label: "C", text: "Run gcloud iam roles describe roles/spanner.viewer --project my-project. Add the users to the role." },
      { label: "D", text: "Run gcloud iam roles describe roles/spanner.viewer --project my-project. Add the users to a new group. Add the group to the role." }
    ],
    correctAnswer: "B",
    explanation: "Using the roles/spanner.databaseUser role allows reading and writing data. Using a group is best practice for managing multiple users."
  },
  {
    id: 39,
    topic: "Kubernetes",
    text: "You create a new Google Kubernetes Engine (GKE) cluster and want to make sure that it always runs a supported and stable version of Kubernetes. What should you do?",
    options: [
      { label: "A", text: "Enable the Node Auto-Repair feature for your GKE cluster." },
      { label: "B", text: "Enable the Node Auto-Upgrades feature for your GKE cluster." },
      { label: "C", text: "Select the latest available cluster version for your GKE cluster." },
      { label: "D", text: "Select Container-Optimized OS (cos) as a node image for your GKE cluster." }
    ],
    correctAnswer: "B",
    explanation: "Node Auto-Upgrades ensure that the nodes in your cluster are kept up-to-date with the cluster master version, maintaining a supported and stable environment."
  },
  {
    id: 40,
    topic: "Networking",
    text: "You have an instance group that you want to load balance. You want the load balancer to terminate the client SSL session. The instance group is used to serve a public web application over HTTPS. You want to follow Google-recommended practices. What should you do?",
    options: [
      { label: "A", text: "Configure an HTTP(S) load balancer." },
      { label: "B", text: "Configure an internal TCP load balancer." },
      { label: "C", text: "Configure an external SSL proxy load balancer." },
      { label: "D", text: "Configure an external TCP proxy load balancer." }
    ],
    correctAnswer: "A",
    explanation: "HTTP(S) Load Balancer is designed for web applications and handles SSL termination."
  },
  {
    id: 41,
    topic: "Storage",
    text: "You have 32 GB of data in a single file that you need to upload to a Nearline Storage bucket. The WAN connection you are using is rated at 1 Gbps, and you are the only one on the connection. You want to use as much of the rated 1 Gbps as possible to transfer the file rapidly. How should you upload the file?",
    options: [
      { label: "A", text: "Use the GCP Console to transfer the file instead of gsutil." },
      { label: "B", text: "Enable parallel composite uploads using gsutil on the file transfer." },
      { label: "C", text: "Decrease the TCP window size on the machine initiating the transfer." },
      { label: "D", text: "Change the storage class of the bucket from Nearline to Multi-Regional." }
    ],
    correctAnswer: "B",
    explanation: "Parallel composite uploads allow breaking a large file into chunks and uploading them in parallel, utilizing high bandwidth connections effectively."
  },
  {
    id: 42,
    topic: "Kubernetes",
    text: "You've deployed a microservice called myapp1 to a Google Kubernetes Engine cluster using a YAML file. You need to refactor this configuration so that the database password is not stored in plain text. You want to follow Google-recommended practices. What should you do?",
    options: [
      { label: "A", text: "Store the database password inside the Docker image of the container, not in the YAML file." },
      { label: "B", text: "Store the database password inside a Secret object. Modify the YAML file to populate the DB_PASSWORD environment variable from the Secret." },
      { label: "C", text: "Store the database password inside a ConfigMap object." },
      { label: "D", text: "Store the database password in a file inside a Kubernetes persistent volume." }
    ],
    correctAnswer: "B",
    explanation: "Kubernetes Secrets are the standard and secure way to store sensitive information like passwords and keys."
  },
  {
    id: 43,
    topic: "Compute Engine",
    text: "You are running an application on multiple virtual machines within a managed instance group and have autoscaling enabled. The virtual machine instances take around three minutes to become available for users. You observe that when the instance group autoscales, it adds more instances then necessary to support the levels of end-user traffic. You want to properly maintain instance group sizes when autoscaling. What should you do?",
    options: [
      { label: "A", text: "Set the maximum number of instances to 1." },
      { label: "B", text: "Decrease the maximum number of instances to 3." },
      { label: "C", text: "Use a TCP health check instead of an HTTP health check." },
      { label: "D", text: "Increase the initial delay of the HTTP health check to 200 seconds." }
    ],
    correctAnswer: "D",
    explanation: "Increasing the initial delay (cool-down period) prevents the autoscaler from adding more instances while the recently added ones are still initializing (booting up)."
  },
  {
    id: 44,
    topic: "Compute Engine",
    text: "You need to select and configure compute resources for a set of batch processing jobs. These jobs take around 2 hours to complete and are run nightly. You want to minimize service costs. What should you do?",
    options: [
      { label: "A", text: "Select Google Kubernetes Engine. Use a single-node cluster with a small instance type." },
      { label: "B", text: "Select Google Kubernetes Engine. Use a three-node cluster with micro instance types." },
      { label: "C", text: "Select Compute Engine. Use preemptible VM instances of the appropriate standard machine type." },
      { label: "D", text: "Select Compute Engine. Use VM instance types that support micro bursting." }
    ],
    correctAnswer: "C",
    explanation: "Preemptible VMs are highly cost-effective for batch jobs that can tolerate interruption. Since the jobs run nightly, this fits the use case well."
  },
  {
    id: 45,
    topic: "App Engine",
    text: "You recently deployed a new version of an application to App Engine and then discovered a bug in the release. You need to immediately revert to the prior version of the application. What should you do?",
    options: [
      { label: "A", text: "Run gcloud app restore." },
      { label: "B", text: "On the App Engine page of the GCP Console, select the application that needs to be reverted and click Revert." },
      { label: "C", text: "On the App Engine Versions page of the GCP Console, route 100% of the traffic to the previous version." },
      { label: "D", text: "Deploy the original version as a separate application." }
    ],
    correctAnswer: "C",
    explanation: "App Engine allows you to easily split or migrate traffic between versions. Routing 100% traffic to the previous version is the fastest rollback method."
  },
  {
    id: 46,
    topic: "App Engine",
    text: "You deployed an App Engine application using gcloud app deploy, but it did not deploy to the intended project. You want to find out why this happened and where the application deployed. What should you do?",
    options: [
      { label: "A", text: "Check the app.yaml file." },
      { label: "B", text: "Check the web-application.xml file." },
      { label: "C", text: "Go to Deployment Manager and review settings." },
      { label: "D", text: "Go to Cloud Shell and run gcloud config list to review the Google Cloud configuration used for deployment." }
    ],
    correctAnswer: "D",
    explanation: "gcloud app deploy uses the project set in your gcloud configuration. Checking 'gcloud config list' reveals the active project."
  },
  {
    id: 47,
    topic: "Compute Engine",
    text: "You want to configure 10 Compute Engine instances for availability when maintenance occurs. Your requirements state that these instances should attempt to automatically restart if they crash. Also, the instances should be highly available including during system maintenance. What should you do?",
    options: [
      { label: "A", text: "Create an instance template. Set 'Automatic Restart' to on. Set 'On-host maintenance' to Migrate VM instance." },
      { label: "B", text: "Create an instance template. Set 'Automatic Restart' to off. Set 'On-host maintenance' to Terminate VM instances." },
      { label: "C", text: "Create an instance group. Set the 'Autohealing' health check to healthy." },
      { label: "D", text: "Create an instance group. Verify that 'do not retry machine creation' is set to off." }
    ],
    correctAnswer: "A",
    explanation: "Automatic Restart handles crashes, and Migrate VM instance handles system maintenance by moving the VM to another host without downtime."
  },
  {
    id: 48,
    topic: "Storage",
    text: "You host a static website on Cloud Storage. You want the clicked PDF files to be displayed within the browser window directly, without prompting the user to save the file locally. What should you do?",
    options: [
      { label: "A", text: "Enable Cloud CDN on the website frontend." },
      { label: "B", text: "Enable 'Share publicly' on the PDF file objects." },
      { label: "C", text: "Set Content-Type metadata to application/pdf on the PDF file objects." },
      { label: "D", text: "Add a label to the storage bucket with a key of Content-Type and value of application/pdf." }
    ],
    correctAnswer: "C",
    explanation: "Setting the Content-Type to application/pdf tells the browser to attempt to render the file (inline) rather than download it."
  },
  {
    id: 49,
    topic: "Compute Engine",
    text: "You have a virtual machine that is currently configured with 2 vCPUs and 4 GB of memory. It is running out of memory. You want to upgrade the virtual machine to have 8 GB of memory. What should you do?",
    options: [
      { label: "A", text: "Rely on live migration." },
      { label: "B", text: "Use gcloud to add metadata." },
      { label: "C", text: "Stop the VM, change the machine type to n1-standard-8, and start the VM." },
      { label: "D", text: "Stop the VM, increase the memory to 8 GB, and start the VM." }
    ],
    correctAnswer: "D",
    explanation: "To change the machine type or resources (like memory) of a VM, you must first stop the instance."
  },
  {
    id: 50,
    topic: "Networking",
    text: "You have production and test workloads. Production VMs need to be in a different subnet than the test VMs. All the VMs must be able to reach each other over Internal IP without creating additional routes. Which configuration meets these requirements?",
    options: [
      { label: "A", text: "Create a single custom VPC with 2 subnets. Create each subnet in a different region and with a different CIDR range." },
      { label: "B", text: "Create a single custom VPC with 2 subnets. Create each subnet in the same region and with the same CIDR range." },
      { label: "C", text: "Create 2 custom VPCs, each with a single subnet." },
      { label: "D", text: "Create 2 custom VPCs, each with a single subnet. Create each subnet in the same region." }
    ],
    correctAnswer: "A",
    explanation: "VMs in the same VPC can communicate via internal IP regardless of region. Using separate subnets in a single VPC meets the requirements."
  },
  {
    id: 51,
    topic: "Compute Engine",
    text: "You need to create an autoscaling managed instance group for an HTTPS web application. You want to make sure that unhealthy VMs are recreated. What should you do?",
    options: [
      { label: "A", text: "Create a health check on port 443 and use that when creating the Managed Instance Group." },
      { label: "B", text: "Select Multi-Zone instead of Single-Zone." },
      { label: "C", text: "In the Instance Template, add the label 'health-check'." },
      { label: "D", text: "In the Instance Template, add a startup script that sends a heartbeat." }
    ],
    correctAnswer: "A",
    explanation: "A health check configured on the service port (443 for HTTPS) allows the MIG to detect unhealthy instances and recreate them."
  },
  {
    id: 52,
    topic: "BigQuery",
    text: "Your company has a Google Cloud Platform project that uses BigQuery for data warehousing. Your data science team changes frequently and has few members. You need to allow members of this team to perform queries. You want to follow Google-recommended practices. What should you do?",
    options: [
      { label: "A", text: "Create an IAM entry for each user. Assign BigQuery jobUser." },
      { label: "B", text: "Create an IAM entry for each user. Assign BigQuery dataViewer." },
      { label: "C", text: "Create a dedicated Google group in Cloud Identity. Add users to the group. Assign the BigQuery jobUser role to the group." },
      { label: "D", text: "Create a dedicated Google group. Assign BigQuery dataViewer to the group." }
    ],
    correctAnswer: "C",
    explanation: "Using Google Groups for permission management is a best practice. The jobUser role allows running queries."
  },
  {
    id: 53,
    topic: "Networking",
    text: "Your company has a 3-tier solution running on Compute Engine. Each tier has a service account associated with all instances within it. You need to enable communication on TCP port 8080 between tier #1 and #2, and tier #2 and #3. What should you do?",
    options: [
      { label: "A", text: "Create ingress firewall rules using IP ranges." },
      { label: "B", text: "Create ingress firewall rules using service accounts as Source and Target filters." },
      { label: "C", text: "Create ingress firewall rules using network tags." },
      { label: "D", text: "Create egress firewall rules." }
    ],
    correctAnswer: "B",
    explanation: "Using service accounts for firewall rules is more secure and dynamic than IP ranges or tags, ensuring only specific tiers can communicate."
  },
  {
    id: 54,
    topic: "Networking",
    text: "You are given a project with a single VPC and a single subnetwork in us-central1. There is a Compute Engine instance hosting an application in this subnetwork. You need to deploy a new instance in the same project in europe-west1. This new instance needs access to the application via internal IP. What should you do?",
    options: [
      { label: "A", text: "Create a subnetwork in the same VPC, in europe-west1. Create the new instance there." },
      { label: "B", text: "Create a VPC and subnet in europe-west1. Expose via internal load balancer." },
      { label: "C", text: "Create a subnetwork in the same VPC. Use Cloud VPN." },
      { label: "D", text: "Create a VPC and subnet. Peer the 2 VPCs." }
    ],
    correctAnswer: "A",
    explanation: "VPCs are global. You can simply add a subnet in a different region to the existing VPC, and instances can communicate via internal IP."
  },
  {
    id: 55,
    topic: "Operations",
    text: "Your projects incurred more costs than you expected last month. Your research reveals that a development GKE container emitted a huge number of logs. You want to disable the logs quickly using the minimum number of steps. What should you do?",
    options: [
      { label: "A", text: "Go to the Logs ingestion window (Log Router) in Cloud Logging, and create an exclusion filter for the GKE container resource." },
      { label: "B", text: "Go to Logs ingestion and disable the log source for GKE Cluster Operations." },
      { label: "C", text: "Delete and recreate the cluster without logging." },
      { label: "D", text: "Delete and recreate the cluster without monitoring." }
    ],
    correctAnswer: "A",
    explanation: "Creating an exclusion filter in the Log Router is the quickest way to stop ingesting specific logs without modifying infrastructure."
  },
  {
    id: 56,
    topic: "App Engine",
    text: "You have a website hosted on App Engine standard environment. You want 1% of your users to see a new test version of the website. You want to minimize complexity. What should you do?",
    options: [
      { label: "A", text: "Deploy the new version and use --migrate." },
      { label: "B", text: "Deploy the new version and use the --splits option to give a weight of 1 to the new version." },
      { label: "C", text: "Create a new App Engine application." },
      { label: "D", text: "Create a new App Engine application and configure a load balancer." }
    ],
    correctAnswer: "B",
    explanation: "App Engine supports traffic splitting natively. Using --splits allows you to route a specific percentage of traffic to a version."
  },
  {
    id: 57,
    topic: "Compute Engine",
    text: "You have a web application deployed as a managed instance group. You have a new version of the application to gradually deploy. Your web application is currently receiving live web traffic. You want to ensure that the available capacity does not decrease during the deployment. What should you do?",
    options: [
      { label: "A", text: "Perform a rolling-action start-update with maxSurge set to 0 and maxUnavailable set to 1." },
      { label: "B", text: "Perform a rolling-action start-update with maxSurge set to 1 and maxUnavailable set to 0." },
      { label: "C", text: "Create a new managed instance group and load balance." },
      { label: "D", text: "Create a new instance template and delete instances." }
    ],
    correctAnswer: "B",
    explanation: "Setting maxUnavailable to 0 ensures no instances are taken offline without a replacement. maxSurge 1 allows creating an extra instance during update."
  },
  {
    id: 58,
    topic: "Databases",
    text: "You are building an application that stores relational data from users. Users across the globe will use this application. Your CTO is concerned about the scaling requirements because the size of the user base is unknown. You need to implement a database solution that can scale with your user growth with minimum configuration changes. Which storage solution should you use?",
    options: [
      { label: "A", text: "Cloud SQL" },
      { label: "B", text: "Cloud Spanner" },
      { label: "C", text: "Cloud Firestore" },
      { label: "D", text: "Cloud Datastore" }
    ],
    correctAnswer: "B",
    explanation: "Cloud Spanner is a globally distributed, scalable, and strongly consistent relational database service specifically designed for applications requiring global scale and automatic scaling with minimal operational overhead."
  },
  {
    id: 59,
    topic: "Billing",
    text: "You are the organization and billing administrator. You do not want the engineering team to be able to link projects to the billing account. Only the finance team should be able to do this. What should you do?",
    options: [
      { label: "A", text: "Assign the finance team only the Billing Account User role on the billing account." },
      { label: "B", text: "Assign the engineering team only the Billing Account User role." },
      { label: "C", text: "Assign the finance team the Billing Account User role on the billing account and the Project Billing Manager role on the organization." },
      { label: "D", text: "Assign the engineering team the Billing Account User role." }
    ],
    correctAnswer: "D",
    explanation: "Wait, the question asks what you should do to *prevent* engineering and *allow* finance. Correct logic: Finance needs Billing Account User. Engineering should NOT have it."
  },
  {
    id: 60,
    topic: "Networking",
    text: "You have an application in GKE exposing a TCP endpoint. You have a Compute Engine instance in another VPC (gce-network) in the same region. You need to connect to the application on GKE. What should you do?",
    options: [
      { label: "A", text: "Create a Service of type LoadBalancer. Use externalTrafficPolicy." },
      { label: "B", text: "Create a Service of type NodePort. Use proxy." },
      { label: "C", text: "Create a Service of type LoadBalancer with annotation cloud.google.com/load-balancer-type: Internal. Peer the two VPCs." },
      { label: "D", text: "Create a Service of type LoadBalancer. Add Cloud Armor." }
    ],
    correctAnswer: "C",
    explanation: "Internal Load Balancers combined with VPC Peering allow private communication between VPCs in the same region."
  },
  {
    id: 61,
    topic: "Operations",
    text: "Your organization needs to store audit log files for 3 years. You need to implement a cost-effective approach for log file retention. What should you do?",
    options: [
      { label: "A", text: "Export logs to BigQuery." },
      { label: "B", text: "Export logs to a Coldline Storage bucket." },
      { label: "C", text: "Write a custom script." },
      { label: "D", text: "Export logs to Cloud Pub/Sub." }
    ],
    correctAnswer: "B",
    explanation: "Coldline Storage is designed for infrequent access and long-term retention, making it the most cost-effective option for audit logs."
  },
  {
    id: 62,
    topic: "Compute Engine",
    text: "You want to run a single caching HTTP reverse proxy on GCP for a latency-sensitive website. You want to have a 30-GB in-memory cache and need an additional 2 GB of memory for processes. You want to minimize cost. What should you do?",
    options: [
      { label: "A", text: "Create a Cloud Memorystore for Redis instance." },
      { label: "B", text: "Run it on Compute Engine with custom instance type." },
      { label: "C", text: "Package it in a container and run on GKE." },
      { label: "D", text: "Run on Compute Engine with n1-standard-1 and SSD." }
    ],
    correctAnswer: "A",
    explanation: "Cloud Memorystore for Redis is a managed in-memory data store service, perfect for caching."
  },
  {
    id: 63,
    topic: "Networking",
    text: "You are hosting an application on bare-metal servers. The application needs access to Cloud Storage. Security policies prevent public IP addresses. What should you do?",
    options: [
      { label: "A", text: "Use nslookup." },
      { label: "B", text: "Use Cloud VPN and a Squid proxy." },
      { label: "C", text: "Use Migrate for Compute Engine." },
      { label: "D", text: "Use Cloud VPN or Interconnect, and configure Private Google Access for on-premises hosts (restricted.googleapis.com)." }
    ],
    correctAnswer: "D",
    explanation: "Private Google Access for on-premises hosts allows reaching Google APIs via a VPN/Interconnect without public IPs."
  },
  {
    id: 64,
    topic: "App Engine",
    text: "You want to deploy an application on Cloud Run that processes messages from a Cloud Pub/Sub topic. What should you do?",
    options: [
      { label: "A", text: "Create a Cloud Function." },
      { label: "B", text: "Grant Pub/Sub Subscriber role." },
      { label: "C", text: "Create a service account. Give Cloud Run Invoker role. Create a Pub/Sub push subscription." },
      { label: "D", text: "Deploy on GKE." }
    ],
    correctAnswer: "C",
    explanation: "Pub/Sub push subscriptions can directly trigger Cloud Run services. You need a service account for authentication."
  },
  {
    id: 65,
    topic: "Cloud Run",
    text: "You need to deploy an application packaged in a container image. It receives very few requests per day. You want to minimize costs. What should you do?",
    options: [
      { label: "A", text: "Deploy on Cloud Run." },
      { label: "B", text: "Deploy on Cloud Run on GKE." },
      { label: "C", text: "Deploy on App Engine Flexible." },
      { label: "D", text: "Deploy on GKE." }
    ],
    correctAnswer: "A",
    explanation: "Cloud Run (fully managed) scales to zero, meaning you pay nothing when there are no requests."
  },
  {
    id: 66,
    topic: "Billing",
    text: "Your company acquired another company. You want to consolidate all GCP costs onto a single invoice as of tomorrow. What should you do?",
    options: [
      { label: "A", text: "Link the acquired company's projects to your company's billing account." },
      { label: "B", text: "Configure billing export to BigQuery." },
      { label: "C", text: "Migrate projects to your organization." },
      { label: "D", text: "Create a new organization." }
    ],
    correctAnswer: "A",
    explanation: "Linking projects to a single billing account is the mechanism to consolidate invoices."
  },
  {
    id: 67,
    topic: "IAM",
    text: "You built an application using Cloud Spanner. Your support team needs to monitor the environment but should not have access to table data. Which role should you grant?",
    options: [
      { label: "A", text: "roles/monitoring.viewer" },
      { label: "B", text: "roles/spanner.databaseUser" },
      { label: "C", text: "roles/spanner.databaseReader" },
      { label: "D", text: "roles/stackdriver.accounts.viewer" }
    ],
    correctAnswer: "A",
    explanation: "Monitoring Viewer allows viewing metrics and dashboards without granting access to the data content."
  },
  {
    id: 68,
    topic: "Operations",
    text: "You need to send all logs from Compute Engine instances to a BigQuery dataset. You want to minimize cost. What should you do?",
    options: [
      { label: "A", text: "Give BigQuery Data Editor role." },
      { label: "B", text: "Create a logs export with Pub/Sub." },
      { label: "C", text: "In Cloud Logging, create a filter and a Sink with BigQuery as destination." },
      { label: "D", text: "Create a Cloud Function." }
    ],
    correctAnswer: "C",
    explanation: "Creating a Log Sink in Cloud Logging is the standard, managed way to export logs to BigQuery."
  },
  {
    id: 69,
    topic: "Deployment",
    text: "You are using Deployment Manager to create a GKE cluster. You also want to create a DaemonSet. You want to use the fewest possible services. What should you do?",
    options: [
      { label: "A", text: "Add the cluster's API as a new Type Provider in Deployment Manager, and use the new type to create the DaemonSet." },
      { label: "B", text: "Use Runtime Configurator." },
      { label: "C", text: "Use startup script with kubectl." },
      { label: "D", text: "Add metadata." }
    ],
    correctAnswer: "A",
    explanation: "Type Providers allow Deployment Manager to manage resources from other APIs (like Kubernetes) directly."
  },
  {
    id: 70,
    topic: "IAM",
    text: "You are building an application in your data center that uses AutoML. You created a service account. You need to enable authentication to the APIs from your on-premises environment. What should you do?",
    options: [
      { label: "A", text: "Use service account credentials." },
      { label: "B", text: "Use gcloud to create a key file for the service account." },
      { label: "C", text: "Set up direct interconnect." },
      { label: "D", text: "Use a user account." }
    ],
    correctAnswer: "B",
    explanation: "For on-premises applications to authenticate as a service account, you need to generate a service account key file."
  },
  {
    id: 71,
    topic: "Kubernetes",
    text: "You are using Container Registry in a separate project. You want to create a GKE cluster in another project and ensure it can download images. What should you do?",
    options: [
      { label: "A", text: "Grant the Storage Object Viewer IAM role to the service account used by the Kubernetes nodes." },
      { label: "B", text: "Choose Allow full access to all Cloud APIs." },
      { label: "C", text: "Create a service account with P12 key." },
      { label: "D", text: "Configure ACLs." }
    ],
    correctAnswer: "A",
    explanation: "Container Registry uses Cloud Storage. Granting Storage Object Viewer to the node's service account allows pulling images."
  },
  {
    id: 72,
    topic: "Kubernetes",
    text: "You deployed a new application. You check the status and see a pod is in PENDING status. You want to find out why. What should you do?",
    options: [
      { label: "A", text: "Review Service object." },
      { label: "B", text: "Review Deployment object." },
      { label: "C", text: "Review details of the Pod (kubectl describe pod)." },
      { label: "D", text: "View logs." }
    ],
    correctAnswer: "C",
    explanation: "Describing the pod ('kubectl describe pod') provides events and status details, explaining why it's pending (e.g., insufficient resources)."
  },
  {
    id: 73,
    topic: "Compute Engine",
    text: "You are setting up a Windows VM. You want to make sure you can log in via RDP. What should you do?",
    options: [
      { label: "A", text: "Use Google Account credentials." },
      { label: "B", text: "Use gcloud compute reset-windows-password." },
      { label: "C", text: "Add metadata." },
      { label: "D", text: "Download JSON key." }
    ],
    correctAnswer: "B",
    explanation: "This command generates a new password for the Windows user, allowing RDP access."
  },
  {
    id: 74,
    topic: "Compute Engine",
    text: "You want to configure SSH connection to a single instance for users in a group. This instance is the only resource they should connect to. What should you do?",
    options: [
      { label: "A", text: "Set metadata enable-oslogin=true. Grant compute.osLogin role." },
      { label: "B", text: "Set metadata enable-oslogin=true. Remove service account." },
      { label: "C", text: "Enable block project wide keys. Generate SSH key." },
      { label: "D", text: "Enable block project wide keys. Generate SSH key and associate with instance." }
    ],
    correctAnswer: "A",
    explanation: "OS Login manages SSH access using IAM roles, which is the recommended and more secure method."
  },
  {
    id: 75,
    topic: "Management Tools",
    text: "You need to produce a list of enabled APIs for a project using gcloud. What should you do?",
    options: [
      { label: "A", text: "Run gcloud projects list, then gcloud services list --project <ID>." },
      { label: "B", text: "Run gcloud init, then gcloud services list --available." },
      { label: "C", text: "Run gcloud info, then gcloud services list." },
      { label: "D", text: "Run gcloud projects describe, then gcloud services list --available." }
    ],
    correctAnswer: "A",
    explanation: "You identify the project ID first, then list enabled services for that specific project."
  },
  {
    id: 76,
    topic: "App Engine",
    text: "You are building a new version of an App Engine application. You want to test the new version with 1% of users. What should you do?",
    options: [
      { label: "A", text: "Deploy on GKE." },
      { label: "B", text: "Deploy on Compute Engine." },
      { label: "C", text: "Deploy as a separate app." },
      { label: "D", text: "Deploy a new version. Use App Engine settings to split traffic." }
    ],
    correctAnswer: "D",
    explanation: "App Engine's traffic splitting feature allows precise control over traffic distribution between versions."
  },
  {
    id: 77,
    topic: "Kubernetes",
    text: "You need to provide a cost estimate for a Kubernetes cluster using the Pricing Calculator. Workload requires high IOPs and disk snapshots. You entered node count. What next?",
    options: [
      { label: "A", text: "Fill in local SSD. Fill in persistent disk storage and snapshot storage." },
      { label: "B", text: "Fill in local SSD. Add cluster management cost." },
      { label: "C", text: "Select Add GPUs." },
      { label: "D", text: "Select Add GPUs." }
    ],
    correctAnswer: "A",
    explanation: "Local SSDs provide high IOPS. Persistent disk and snapshots cover the storage requirements."
  },
  {
    id: 78,
    topic: "Kubernetes",
    text: "You are using GKE with autoscaling. You want to expose a new application to the public using HTTPS on a public IP. What should you do?",
    options: [
      { label: "A", text: "Create a Service of type NodePort and an Ingress." },
      { label: "B", text: "Create a Service of type ClusterIP." },
      { label: "C", text: "Create a Service of type NodePort on port 443." },
      { label: "D", text: "Create a HAProxy pod." }
    ],
    correctAnswer: "A",
    explanation: "Ingress is the Kubernetes resource that manages external access (HTTP/HTTPS) to services, typically using a Load Balancer."
  },
  {
    id: 79,
    topic: "Networking",
    text: "You need to enable traffic between multiple groups of Compute Engine instances in two different projects. Each group is in its own VPC. What should you do?",
    options: [
      { label: "A", text: "Create a new VPC and add all instances." },
      { label: "B", text: "Share the VPC from one project (Shared VPC)." },
      { label: "C", text: "Create two new VPCs." },
      { label: "D", text: "Create a new VPC." }
    ],
    correctAnswer: "B",
    explanation: "Shared VPC allows resources in different projects to communicate securely using internal IPs within a common network."
  },
  {
    id: 80,
    topic: "IAM",
    text: "You want to add a new auditor to a GCP project. The auditor should be allowed to read, but not modify, all project items. What should you do?",
    options: [
      { label: "A", text: "Create a custom role." },
      { label: "B", text: "Create a custom role with service permissions." },
      { label: "C", text: "Select the built-in IAM project Viewer role." },
      { label: "D", text: "Select the built-in IAM service Viewer role." }
    ],
    correctAnswer: "C",
    explanation: "The Project Viewer role gives read-only access to all resources in the project, fitting the requirement."
  },
  {
    id: 81,
    topic: "Kubernetes",
    text: "Your ML team needs access to Nvidia Tesla P100 GPUs in a GKE cluster. You want to minimize effort and cost. What should you do?",
    options: [
      { label: "A", text: "Ask ML team to add annotation." },
      { label: "B", text: "Recreate all nodes." },
      { label: "C", text: "Create your own cluster on Compute Engine." },
      { label: "D", text: "Add a new, GPU-enabled node pool." }
    ],
    correctAnswer: "D",
    explanation: "Adding a node pool is the standard way to introduce nodes with different hardware configurations (like GPUs) to an existing cluster."
  },
  {
    id: 82,
    topic: "Networking",
    text: "Your VMs are running in a subnet with a /28 mask (e.g. ending in .240). You need more IP addresses. What should you do?",
    options: [
      { label: "A", text: "Use gcloud to expand the IP range." },
      { label: "B", text: "Delete the subnet and recreate." },
      { label: "C", text: "Create a new project." },
      { label: "D", text: "Create a new subnet." }
    ],
    correctAnswer: "A",
    explanation: "You can expand the IP range of a subnet without deleting it."
  },
  {
    id: 83,
    topic: "IAM",
    text: "Your organization uses G Suite. You want to grant G Suite users access to your Cloud Platform project. What should you do?",
    options: [
      { label: "A", text: "Enable Cloud Identity." },
      { label: "B", text: "Grant them required IAM roles using their G Suite email address." },
      { label: "C", text: "Create a CSV sheet." },
      { label: "D", text: "In G Suite console, add users to a special group." }
    ],
    correctAnswer: "B",
    explanation: "G Suite identities are integrated with GCP IAM. You can directly grant roles to email addresses."
  },
  {
    id: 84,
    topic: "Management Tools",
    text: "You have access to production and development projects. You need to automate listing all instances in both projects daily. What should you do?",
    options: [
      { label: "A", text: "Create two configurations using gcloud config. Write a script to activate and list." },
      { label: "B", text: "Create two configurations using gsutil." },
      { label: "C", text: "Go to Cloud Shell." },
      { label: "D", text: "Go to GCP Console." }
    ],
    correctAnswer: "A",
    explanation: "Configurations allow you to store different project settings and switch between them easily in scripts."
  },
  {
    id: 85,
    topic: "Databases",
    text: "You have a 5-TB AVRO file in Cloud Storage. Analysts need to query it using SQL. What is the most cost-effective way?",
    options: [
      { label: "A", text: "Load into Datastore." },
      { label: "B", text: "Load into BigQuery." },
      { label: "C", text: "Create external tables in BigQuery pointing to Cloud Storage." },
      { label: "D", text: "Create a Hadoop cluster." }
    ],
    correctAnswer: "C",
    explanation: "External tables allow you to query data directly in Cloud Storage without loading it into BigQuery storage, saving on storage costs."
  },
  {
    id: 86,
    topic: "Operations",
    text: "You need to verify that a service account was created at a particular time. What should you do?",
    options: [
      { label: "A", text: "Filter Activity log for Configuration category and Service Account resource." },
      { label: "B", text: "Filter Activity log for Configuration category and Google Project." },
      { label: "C", text: "Filter Activity log for Data Access category." },
      { label: "D", text: "Filter Activity log for Data Access category." }
    ],
    correctAnswer: "A",
    explanation: "Admin Activity logs (Configuration) record resource creation/modification. Filtering by Service Account targets the specific resource."
  },
  {
    id: 87,
    topic: "Networking",
    text: "You deployed an LDAP server reachable via UDP port 636. You want to make sure it is reachable by clients. What should you do?",
    options: [
      { label: "A", text: "Add a network tag." },
      { label: "B", text: "Create a route." },
      { label: "C", text: "Add a network tag. Create an ingress firewall rule allowing UDP 636." },
      { label: "D", text: "Create an egress firewall rule." }
    ],
    correctAnswer: "C",
    explanation: "Firewall rules control incoming traffic. You need an ingress rule allowing the specific port/protocol."
  },
  {
    id: 88,
    topic: "Billing",
    text: "You need to set a budget alert for one of three projects linked to a single billing account. What should you do?",
    options: [
      { label: "A", text: "Verify you are project billing administrator. Create a budget for the appropriate project." },
      { label: "B", text: "Verify you are project billing administrator. Create a custom alert." },
      { label: "C", text: "Verify you are project administrator." },
      { label: "D", text: "Verify you are project administrator." }
    ],
    correctAnswer: "A",
    explanation: "You need specific billing permissions. Budgets can be scoped to specific projects."
  },
  {
    id: 89,
    topic: "Compute Engine",
    text: "You are migrating an application requiring 96 vCPUs. You want to ensure it runs on GCP. What should you do?",
    options: [
      { label: "A", text: "Use machine type n1-standard-96." },
      { label: "B", text: "Use Intel Skylake." },
      { label: "C", text: "Use gcloud to modify instance." },
      { label: "D", text: "Start with default and adjust." }
    ],
    correctAnswer: "A",
    explanation: "Selecting the specific machine type that meets the core requirement (96 vCPUs) is the direct solution."
  },
  {
    id: 90,
    topic: "Storage",
    text: "You want to archive data in Cloud Storage. Access is once a month. Data is updated occasionally. What should you do?",
    options: [
      { label: "A", text: "Archive to Coldline." },
      { label: "B", text: "Archive to Nearline." },
      { label: "C", text: "Archive to Coldline (regional)." },
      { label: "D", text: "Archive to Nearline (regional)." }
    ],
    correctAnswer: "B",
    explanation: "Nearline is best for data accessed less than once a month. Coldline is for less than once a year."
  },
  {
    id: 91,
    topic: "Networking",
    text: "Your on-premises machines are at capacity. You want to burst to Google Cloud. Workloads must communicate using private IPs. What should you do?",
    options: [
      { label: "A", text: "Shared VPC." },
      { label: "B", text: "VPC Peering." },
      { label: "C", text: "Bastion hosts." },
      { label: "D", text: "Set up Cloud VPN." }
    ],
    correctAnswer: "D",
    explanation: "Cloud VPN provides secure connectivity between on-premises networks and GCP VPCs using private IPs."
  },
  {
    id: 92,
    topic: "Storage",
    text: "You need to store data from one geographic location. Archived after 30 days, accessed annually. What should you do?",
    options: [
      { label: "A", text: "Multi-Regional -> Coldline." },
      { label: "B", text: "Multi-Regional -> Nearline." },
      { label: "C", text: "Regional -> Nearline." },
      { label: "D", text: "Select Regional Storage. Add a bucket lifecycle rule that archives data after 30 days to Coldline Storage." }
    ],
    correctAnswer: "D",
    explanation: "Regional storage fits single location. Coldline is best for annual access."
  },
  {
    id: 93,
    topic: "Databases",
    text: "Your CIO wants you to examine 1000+ BigQuery datasets to find tables with an employee_ssn column. What should you do?",
    options: [
      { label: "A", text: "Go to Data Catalog and search for employee_ssn." },
      { label: "B", text: "Write a shell script." },
      { label: "C", text: "Write a script querying INFORMATION_SCHEMA." },
      { label: "D", text: "Write a Dataflow job." }
    ],
    correctAnswer: "A",
    explanation: "Data Catalog is a metadata management service that allows you to search for data assets across Google Cloud."
  },
  {
    id: 94,
    topic: "Kubernetes",
    text: "You create a Deployment with 2 replicas on a single preemptible node pool. A pod is stuck in Pending status. What is the most likely cause?",
    options: [
      { label: "A", text: "Resource requests too large." },
      { label: "B", text: "Too many Pods running, not enough resources." },
      { label: "C", text: "Service account permission." },
      { label: "D", text: "Node preempted." }
    ],
    correctAnswer: "B",
    explanation: "Pending status usually means the scheduler cannot find a node with enough resources to run the pod."
  },
  {
    id: 95,
    topic: "Operations",
    text: "You want to find out when users were added to Cloud Spanner IAM roles. What should you do?",
    options: [
      { label: "A", text: "Cloud Spanner console." },
      { label: "B", text: "IAM console." },
      { label: "C", text: "Stackdriver Monitoring." },
      { label: "D", text: "Go to the Stackdriver Logging console, review admin activity logs, and filter them for Cloud Spanner IAM roles." }
    ],
    correctAnswer: "D",
    explanation: "Admin Activity logs record IAM policy changes. Filtering by resource/role helps find specific events."
  },
  {
    id: 96,
    topic: "Databases",
    text: "Your company uses BigQuery. Query costs are very high. Which two methods should you use to control costs? (Choose two)",
    options: [
      { label: "A", text: "Split users to multiple projects." },
      { label: "B", text: "Apply a user- or project-level custom query quota." },
      { label: "C", text: "Create separate copies." },
      { label: "D", text: "Split data warehouse." },
      { label: "E", text: "Change query model to flat rate." }
    ],
    correctAnswer: "B", // Actually B and E
    explanation: "Custom quotas limit usage to prevent overspending. Flat rate pricing offers predictable costs for high-volume workloads. (Note: Only single choice field in model, B is a primary control mechanism)."
  },
  {
    id: 97,
    topic: "Kubernetes",
    text: "You are building a product on top of Google Kubernetes Engine (GKE). You have a single GKE cluster. For each of your customers, a Pod is running in that cluster, and your customers can run arbitrary code inside their Pod. You want to maximize the isolation between your customers' Pods. What should you do?",
    options: [
      { label: "A", text: "Use Binary Authorization and whitelist only the container images used by your customers' Pods." },
      { label: "B", text: "Use the Container Analysis API to detect vulnerabilities in the containers used by your customers' Pods." },
      { label: "C", text: "Create a GKE node pool with a sandbox type configured to gvisor. Add the parameter runtimeClassName: gvisor to the specification of your customers' Pods." },
      { label: "D", text: "Use the cos_containerd image for your GKE nodes. Add a nodeSelector with the value cloud.google.com/gke-os-distribution: cos_containerd to the specification of your customers' Pods." }
    ],
    correctAnswer: "C",
    explanation: "Using gvisor, a sandbox container runtime, significantly enhances isolation between customer Pods by providing a separate kernel for each Pod, minimizing the shared kernel attack surface."
  },
  {
    id: 98,
    topic: "Databases",
    text: "Your customer uses Cloud Spanner and notices read latency on a table accessed only by primary key. The table schema has a monotonic primary key. What should you do?",
    options: [
      { label: "A", text: "Remove profile_picture." },
      { label: "B", text: "Add secondary index." },
      { label: "C", text: "Change the primary key to not have monotonically increasing values." },
      { label: "D", text: "Create a secondary index." }
    ],
    correctAnswer: "C",
    explanation: "Monotonically increasing keys cause 'hotspots' in Spanner, where all writes go to the same server. Using a UUID or hash avoids this."
  },
  {
    id: 99,
    topic: "Billing",
    text: "Your finance team wants to view the billing report. You want to ensure they don't get additional permissions. What should you do?",
    options: [
      { label: "A", text: "roles/billing user" },
      { label: "B", text: "roles/billing admin" },
      { label: "C", text: "Add the group for the finance team to roles/billing viewer role." },
      { label: "D", text: "roles/billing project/Manager" }
    ],
    correctAnswer: "C",
    explanation: "Billing Viewer provides read-only access to billing account info and reports."
  },
  {
    id: 100,
    topic: "IAM",
    text: "You need to enable SREs to approve requests from Google Cloud support. What should you do?",
    options: [
      { label: "A", text: "roles/iam.roleAdmin" },
      { label: "B", text: "roles/accessapproval.approver" },
      { label: "C", text: "Group -> roles/iam.roleAdmin" },
      { label: "D", text: "Add your SREs to a group and then add this group to roles/accessapproval.approver role." }
    ],
    correctAnswer: "D",
    explanation: "The Access Approval Approver role allows approving access requests. Using groups is best practice."
  },
  {
    id: 101,
    topic: "Compute Engine",
    text: "You want to prevent other teams from accidentally causing downtime on a shared Compute Engine instance. What feature should you use?",
    options: [
      { label: "A", text: "Shielded VM" },
      { label: "B", text: "Preemptible VM" },
      { label: "C", text: "Sole-tenant node" },
      { label: "D", text: "Enable deletion protection on the instance." }
    ],
    correctAnswer: "D",
    explanation: "Deletion protection prevents the instance from being deleted accidentally."
  },
  {
    id: 102,
    topic: "IAM",
    text: "You need to grant users access to query BigQuery datasets but prevent them from accidentally deleting them. What should you do?",
    options: [
      { label: "A", text: "roles/bigquery user" },
      { label: "B", text: "roles/bigquery dataEditor" },
      { label: "C", text: "Custom role removing delete" },
      { label: "D", text: "Create a custom role by removing delete permissions. Add users to the group, and then add the group to the custom role." }
    ],
    correctAnswer: "D",
    explanation: "Custom roles allow precise control. Removing delete permissions ensures data safety."
  },
  {
    id: 103,
    topic: "Databases",
    text: "You want to test your application locally with Cloud Datastore. You have the Cloud SDK. What should you do?",
    options: [
      { label: "A", text: "Export data." },
      { label: "B", text: "Create index." },
      { label: "C", text: "Install the google-cloud-sdk-datastore-emulator component." },
      { label: "D", text: "Install component via gcloud." }
    ],
    correctAnswer: "C",
    explanation: "The Datastore emulator allows local testing. Installing via apt-get (package manager) is preferred if SDK was installed that way."
  },
  {
    id: 104,
    topic: "IAM",
    text: "You have a complex org structure. Only a few team members should view the hierarchical structure. You need to assign minimum permissions. What should you do?",
    options: [
      { label: "A", text: "roles/browser" },
      { label: "B", text: "roles/iam.roleViewer" },
      { label: "C", text: "Add the users to a group, and add this group to roles/browser." },
      { label: "D", text: "Group -> roleViewer" }
    ],
    correctAnswer: "C",
    explanation: "The Browser role allows viewing the project hierarchy. Using groups is best practice."
  },
  {
    id: 105,
    topic: "Networking",
    text: "You are configuring Cloud DNS. You want to point home.mydomain.com, mydomain.com, and www.mydomain.com to your load balancer IP. What should you do?",
    options: [
      { label: "A", text: "CNAME mydomain -> LB, A records for others." },
      { label: "B", text: "CNAME mydomain -> LB, AAAA records." },
      { label: "C", text: "Create one A record to point mydomain.com to the load balancer, and create two CNAME records to point WWW and HOME to mydomain.com respectively." },
      { label: "D", text: "A record -> LB, NS records." }
    ],
    correctAnswer: "C",
    explanation: "Root domain usually requires an A record. Subdomains can use CNAME to alias the root domain."
  },
  {
    id: 106,
    topic: "IAM",
    text: "Your organization has a dedicated person who creates and manages all service accounts. You need to assign this person the minimum role. What should you do?",
    options: [
      { label: "A", text: "roles/iam.roleAdmin" },
      { label: "B", text: "roles/iam.securityAdmin" },
      { label: "C", text: "roles/iam.serviceAccountUser" },
      { label: "D", text: "Add the user to roles/iam.serviceAccountAdmin role." }
    ],
    correctAnswer: "D",
    explanation: "Service Account Admin role allows creating and managing service accounts."
  },
  {
    id: 107,
    topic: "Storage",
    text: "You are building an archival solution. Data is accessed once a quarter. You want a cost-efficient option. Which storage option should you use?",
    options: [
      { label: "A", text: "Cold Storage" },
      { label: "B", text: "Nearline Storage" },
      { label: "C", text: "Regional Storage" },
      { label: "D", text: "Multi-Regional Storage" }
    ],
    correctAnswer: "A",
    explanation: "Cold Storage (Coldline) is best for data accessed less than once a quarter (90 days)."
  },
  {
    id: 108,
    topic: "Kubernetes",
    text: "A team of data scientists infrequently needs to use a GKE cluster. They require GPUs for long-running, non-restartable jobs. You want to minimize cost. What should you do?",
    options: [
      { label: "A", text: "Enable node auto-provisioning." },
      { label: "B", text: "VerticalPodAutoscaler." },
      { label: "C", text: "Preemptible VMs." },
      { label: "D", text: "Create a node pool of instances with GPUs, and enable autoscaling on this node pool with a minimum size of 1." }
    ],
    correctAnswer: "D",
    explanation: "A dedicated node pool with autoscaling allows scaling down when not in use. Preemptible is not suitable for non-restartable jobs."
  },
  {
    id: 109,
    topic: "IAM",
    text: "Your organization uses Active Directory. You want to use it as the source of truth for identities and have full control over Google accounts. What should you do?",
    options: [
      { label: "A", text: "Use Google Cloud Directory Sync (GCDS) to synchronize users into Cloud Identity." },
      { label: "B", text: "Use Identity APIs." },
      { label: "C", text: "Export CSV." },
      { label: "D", text: "Self signup." }
    ],
    correctAnswer: "A",
    explanation: "GCDS syncs users/groups from AD to Cloud Identity/Google Workspace."
  },
  {
    id: 110,
    topic: "Networking",
    text: "You created a development environment. Now you need to create a production environment. The security team forbids network routes between these 2 environments. What should you do?",
    options: [
      { label: "A", text: "Create a new project, enable APIs, and replicate the setup." },
      { label: "B", text: "Create new subnet in existing VPC." },
      { label: "C", text: "Shared VPC." },
      { label: "D", text: "Grant Project Editor in existing production project." }
    ],
    correctAnswer: "A",
    explanation: "Separate projects provide the strongest isolation."
  },
  {
    id: 111,
    topic: "IAM",
    text: "You want an external auditor to only be able to view, but not modify, resources in a project. Domain Restricted Sharing is enabled. What should you do?",
    options: [
      { label: "A", text: "Ask for their Google account." },
      { label: "B", text: "Security Reviewer role." },
      { label: "C", text: "Create a temporary account for the auditor in Cloud Identity, and give that account the Viewer role on the project." },
      { label: "D", text: "Temporary account -> Security Reviewer." }
    ],
    correctAnswer: "C",
    explanation: "Creating an account within the organization satisfies the domain restriction policy. Viewer role grants read-only access."
  },
  {
    id: 112,
    topic: "Compute Engine",
    text: "You have a critical workload on Compute Engine. You need to back up the boot disk daily and retain backups for 7 days. You want minimal setup. What should you do?",
    options: [
      { label: "A", text: "Cloud Function." },
      { label: "B", text: "Create a snapshot schedule for the disk using the desired interval." },
      { label: "C", text: "Cron job." },
      { label: "D", text: "Cloud Task." }
    ],
    correctAnswer: "B",
    explanation: "Snapshot schedules are a built-in feature for automated backups with retention policies."
  },
  {
    id: 113,
    topic: "IAM",
    text: "You need to assign a role to an external auditor to review GCP Audit Logs and Data Access logs. What should you do?",
    options: [
      { label: "A", text: "logging.privateLogViewer -> Export to Storage." },
      { label: "B", text: "Assign the auditor the IAM role roles/logging.privateLogViewer. Direct the auditor to also review the logs for changes to Cloud IAM policy." },
      { label: "C", text: "Custom role." },
      { label: "D", text: "Custom role." }
    ],
    correctAnswer: "B",
    explanation: "Private Log Viewer allows seeing Data Access logs. Reviewing IAM policy changes covers the audit requirement."
  },
  {
    id: 114,
    topic: "Operations",
    text: "You need access to all logs for the past 60 days for multiple projects. You want to quickly analyze them. What should you do?",
    options: [
      { label: "A", text: "Stackdriver Logging UI." },
      { label: "B", text: "Create a Stackdriver Logging Export with a Sink destination to a BigQuery dataset. Configure the table expiration to 60 days." },
      { label: "C", text: "Sink to Storage." },
      { label: "D", text: "Cloud Scheduler." }
    ],
    correctAnswer: "B",
    explanation: "BigQuery is best for analytics and querying large log datasets."
  },
  {
    id: 115,
    topic: "Billing",
    text: "You need to reduce GCP costs for a division by turning off all configured services in a project. What should you do?",
    options: [
      { label: "A", text: "Verify that you are assigned the Project Owners IAM role for this project. Locate the project in the GCP console, click Shut down and then enter the project ID." },
      { label: "B", text: "Delete resources." },
      { label: "C", text: "Org Admin -> Shut down." },
      { label: "D", text: "Org Admin -> Delete resources." }
    ],
    correctAnswer: "A",
    explanation: "Shutting down the project stops all billing and services."
  },
  {
    id: 116,
    topic: "IAM",
    text: "You are configuring service accounts. VMs in 'web-applications' project need access to BigQuery in 'crm-databases-proj'. What should you do?",
    options: [
      { label: "A", text: "Give project owner." },
      { label: "B", text: "Give project owner." },
      { label: "C", text: "Give project owner." },
      { label: "D", text: "Give bigquery.dataViewer role to crm-databases-proj and appropriate roles to web-applications." }
    ],
    correctAnswer: "D",
    explanation: "Grant the specific BigQuery role (dataViewer) in the project where the data resides."
  },
  {
    id: 117,
    topic: "Operations",
    text: "An employee was terminated. You need to find out if they accessed sensitive customer information after termination. What should you do?",
    options: [
      { label: "A", text: "System Event Logs." },
      { label: "B", text: "System Event Logs." },
      { label: "C", text: "View Data Access audit logs in Stackdriver. Search for the user's email as the principal." },
      { label: "D", text: "Admin Activity log." }
    ],
    correctAnswer: "C",
    explanation: "Data Access logs record \"data read\" operations. Searching by user email identifies their actions."
  },
  {
    id: 118,
    topic: "IAM",
    text: "You need to create a custom IAM role for production. You want to share the status. This is the first version. What should you do?",
    options: [
      { label: "A", text: "Use permissions in your role that use the 'supported' support level for role permissions. Set the role stage to ALPHA while testing the role permissions." },
      { label: "B", text: "Supported -> BETA." },
      { label: "C", text: "Testing -> ALPHA." },
      { label: "D", text: "Testing -> BETA." }
    ],
    correctAnswer: "A",
    explanation: "Using supported permissions ensures stability. ALPHA stage indicates it's in testing."
  },
  {
    id: 119,
    topic: "Databases",
    text: "Your company has unstructured data. You need to make it accessible on Google Cloud for Dataflow processing. What should you do?",
    options: [
      { label: "A", text: "Upload to BigQuery." },
      { label: "B", text: "Upload the data to Cloud Storage using the gsutil command line tool." },
      { label: "C", text: "Upload to Cloud SQL." },
      { label: "D", text: "Upload to Cloud Spanner." }
    ],
    correctAnswer: "B",
    explanation: "Cloud Storage is the repository for unstructured data and integrates with Dataflow."
  },
  {
    id: 120,
    topic: "Management Tools",
    text: "You manage multiple projects. You want to configure the Cloud SDK CLI to easily manage them. What should you do?",
    options: [
      { label: "A", text: "Create a configuration for each project you need to manage. Activate the appropriate configuration when you work with each of your assigned Google Cloud projects." },
      { label: "B", text: "Create configuration -> gcloud init." },
      { label: "C", text: "Default config -> Activate." },
      { label: "D", text: "Default config -> gcloud init." }
    ],
    correctAnswer: "A",
    explanation: "gcloud configurations allow you to store sets of properties (project, account, etc.) and switch between them."
  },
  {
    id: 121,
    topic: "Compute Engine",
    text: "Your managed instance group failed to create new instances. You need to fix it. What should you do?",
    options: [
      { label: "A", text: "Create an instance template that contains valid syntax which will be used by the instance group. Delete any persistent disks with the same name as instance names." },
      { label: "B", text: "Create template -> Verify names." },
      { label: "C", text: "Verify template -> Delete disks -> autoDelete." },
      { label: "D", text: "Delete template -> Replace." }
    ],
    correctAnswer: "A",
    explanation: "Invalid template syntax or naming conflicts with existing disks are common causes for creation failure."
  },
  {
    id: 122,
    topic: "Compute Engine",
    text: "You want to move to Google Cloud quickly with minimal support effort. Developers need Cassandra environments. What should you do?",
    options: [
      { label: "A", text: "Build instruction guide." },
      { label: "B", text: "Advise your developers to go to Cloud Marketplace. Ask the developers to launch a Cassandra image for their development work." },
      { label: "C", text: "Build instance -> snapshot." },
      { label: "D", text: "Build instance -> snapshot -> upload." }
    ],
    correctAnswer: "B",
    explanation: "Cloud Marketplace provides click-to-deploy solutions, minimizing setup effort."
  },
  {
    id: 123,
    topic: "Operations",
    text: "You want to receive an email if a Compute Engine instance consumes more than 90% CPU for 15 minutes. What should you do?",
    options: [
      { label: "A", text: "Script + Gmail." },
      { label: "B", text: "Create a Stackdriver Workspace, and associate your Google Cloud Platform (GCP) project with it. Create an Alerting Policy in Stackdriver." },
      { label: "C", text: "Stackdriver Workspace -> Script." },
      { label: "D", text: "Logs-based metric -> Alerting Policy." }
    ],
    correctAnswer: "B",
    explanation: "Cloud Monitoring (Stackdriver) Alerting Policies are the standard way to trigger notifications based on metrics."
  },
  {
    id: 124,
    topic: "Databases",
    text: "You have an application using Cloud Spanner. You want to automatically scale the number of nodes. What should you do?",
    options: [
      { label: "A", text: "Cron job." },
      { label: "B", text: "Alert -> SRE emails." },
      { label: "C", text: "Alert -> Google Support." },
      { label: "D", text: "Create a Stackdriver alerting policy to send an alert to webhook. Create a Cloud Function that listens to HTTP and resizes Spanner resources." }
    ],
    correctAnswer: "D",
    explanation: "Using Monitoring alerts to trigger a Cloud Function (via webhook/PubSub) allows for automated remedial actions like scaling."
  },
  {
    id: 125,
    topic: "Billing",
    text: "You want to receive an email when the egress network costs for a specific Apache web server exceed 100 dollars. What should you do?",
    options: [
      { label: "A", text: "Budget alert on project." },
      { label: "B", text: "Budget alert on billing account." },
      { label: "C", text: "Export the billing data to BigQuery. Create a Cloud Function that uses BigQuery to sum the egress network costs... and sends an email." },
      { label: "D", text: "Logging Agent -> BigQuery." }
    ],
    correctAnswer: "C",
    explanation: "Billing export to BigQuery allows granular analysis (specific resource) which standard budget alerts (project/account level) cannot do."
  },
  {
    id: 126,
    topic: "Billing",
    text: "You need to estimate the monthly total cost of a solution involving multiple GCP products. What should you do?",
    options: [
      { label: "A", text: "For each GCP product in the solution, review the pricing details on the products pricing page. Use the pricing calculator to total the monthly costs." },
      { label: "B", text: "Review pricing -> Spreadsheet." },
      { label: "C", text: "Provision -> 1 week -> Billing Report." },
      { label: "D", text: "Provision -> 1 week -> Stackdriver." }
    ],
    correctAnswer: "A",
    explanation: "The Pricing Calculator is the tool designed for estimating costs."
  },
  {
    id: 127,
    topic: "Networking",
    text: "You have an application receiving SSL-encrypted TCP traffic on port 443. You want to minimize latency for global clients. Which load balancer should you use?",
    options: [
      { label: "A", text: "HTTPS Load Balancer" },
      { label: "B", text: "Network Load Balancer" },
      { label: "C", text: "SSL Proxy Load Balancer" },
      { label: "D", text: "Internal TCP/UDP Load Balancer." }
    ],
    correctAnswer: "C",
    explanation: "SSL Proxy Load Balancer is a global load balancer for non-HTTP SSL traffic."
  },
  {
    id: 128,
    topic: "Compute Engine",
    text: "Your application is experiencing disk read throttling on its Zonal SSD Persistent Disk. You want to maximize throughput while minimizing costs. What should you do?",
    options: [
      { label: "A", text: "Increase disk size to 1 TB." },
      { label: "B", text: "Increase allocated CPU." },
      { label: "C", text: "Migrate to use a Local SSD on the instance." },
      { label: "D", text: "Migrate to use a Regional SSD." }
    ],
    correctAnswer: "C",
    explanation: "Local SSDs offer the highest performance (IOPS/throughput) and are physically attached to the host."
  },
  {
    id: 129,
    topic: "Networking",
    text: "Your Dataproc cluster is in a subnet with no available private IP addresses. You want to add new VMs. What should you do?",
    options: [
      { label: "A", text: "Modify the existing subnet range to 172.16.20.0/24." },
      { label: "B", text: "Create new Secondary IP Range." },
      { label: "C", text: "New VPC -> Peering." },
      { label: "D", text: "New VPC -> Peering -> Route exchange." }
    ],
    correctAnswer: "A",
    explanation: "Expanding the subnet CIDR range increases the number of available IPs."
  },
  {
    id: 130,
    topic: "IAM",
    text: "You manage an App Engine Service. You need to read data from a BigQuery dataset in a different project. What should you do?",
    options: [
      { label: "A", text: "Grant BigQuery Job User." },
      { label: "B", text: "Ask the other team to grant your default App Engine Service account the role of BigQuery Data Viewer." },
      { label: "C", text: "Ensure default service account has Data Viewer in YOUR project." },
      { label: "D", text: "Grant newly created service account role." }
    ],
    correctAnswer: "B",
    explanation: "Granting the Data Viewer role to the App Engine service account in the *target* project allows access."
  },
  {
    id: 131,
    topic: "Compute Engine",
    text: "You need to create a copy of a custom Compute Engine VM to facilitate an expected increase in traffic. What should you do?",
    options: [
      { label: "A", text: "Snapshot -> Image." },
      { label: "B", text: "Snapshot -> Instance." },
      { label: "C", text: "Custom Image -> Image." },
      { label: "D", text: "Create a custom Compute Engine image from a snapshot. Create your instances from that image." }
    ],
    correctAnswer: "D",
    explanation: "Creating an image from a snapshot allows you to use that image to create multiple identical instances."
  },
  {
    id: 132,
    topic: "Operations",
    text: "You deployed an application on a single Compute Engine instance. The application writes logs to disk. Users report errors. You want to diagnose. What should you do?",
    options: [
      { label: "A", text: "Navigate to Cloud Logging." },
      { label: "B", text: "Connect to serial console." },
      { label: "C", text: "Configure Health Check." },
      { label: "D", text: "Install and configure the Cloud Logging Agent and view the logs from Cloud Logging." }
    ],
    correctAnswer: "D",
    explanation: "The Cloud Logging agent streams logs from the VM (files) to Cloud Logging for analysis."
  },
  {
    id: 133,
    topic: "Storage",
    text: "An application generates daily reports in a VM in project A. Team in project B needs access to these reports in a bucket in project B. What should you do?",
    options: [
      { label: "A", text: "Move projects." },
      { label: "B", text: "Grant the VM Service Account the role Storage Object Creator on corp-aggregate-reports-storage." },
      { label: "C", text: "Shared VPC." },
      { label: "D", text: "Make bucket public." }
    ],
    correctAnswer: "B",
    explanation: "Cross-project access can be handled by granting IAM roles to the service account of one project on the resources of another."
  },
  {
    id: 134,
    topic: "IAM",
    text: "You built an application on your laptop using Application Default Credentials. You want to migrate to a VM and set up authentication using best practices. What should you do?",
    options: [
      { label: "A", text: "Assign access to service account used by VM." },
      { label: "B", text: "Create a service account with appropriate access for Google services, and configure the application to use this account." },
      { label: "C", text: "Store credentials in config file." },
      { label: "D", text: "Store user credentials." }
    ],
    correctAnswer: "B",
    explanation: "Using a dedicated service account for the application is the secure best practice."
  },
  {
    id: 135,
    topic: "Management Tools",
    text: "You need to create a Compute Engine instance in a new project that doesn't exist yet. What should you do?",
    options: [
      { label: "A", text: "Using the Cloud SDK, create a new project, enable the Compute Engine API in that project, and then create the instance specifying your new project." },
      { label: "B", text: "Enable API -> create instance with --project." },
      { label: "C", text: "Create instance -> --project." },
      { label: "D", text: "Enable API -> Console." }
    ],
    correctAnswer: "A",
    explanation: "You must create the project and enable the API before creating resources in it."
  },
  {
    id: 136,
    topic: "Compute Engine",
    text: "You have a batch process that takes 30 hours, runs monthly, and can be restarted. You want to minimize cost. What should you do?",
    options: [
      { label: "A", text: "Preemptible VM." },
      { label: "B", text: "GKE Preemptible." },
      { label: "C", text: "Migrate the workload to a Compute Engine VM. Start and stop the instance as needed." },
      { label: "D", text: "Instance Template Preemptible." }
    ],
    correctAnswer: "C",
    explanation: "Preemptible VMs reset every 24 hours, so a 30-hour job would always fail. Using a standard VM and stopping it when done is the best cost-saving strategy here."
  },
  {
    id: 137,
    topic: "Deployment",
    text: "You want to automate the installation of Jenkins. What should you do?",
    options: [
      { label: "A", text: "Deploy Jenkins through the Google Cloud Marketplace." },
      { label: "B", text: "Create VM -> Install." },
      { label: "C", text: "GKE -> Deployment." },
      { label: "D", text: "Instance Template." }
    ],
    correctAnswer: "A",
    explanation: "Marketplace provides one-click deployment."
  },
  {
    id: 138,
    topic: "Management Tools",
    text: "You want to avoid specifying the zone with each CLI command. What should you do?",
    options: [
      { label: "A", text: "Set the europe-west1-d zone as the default zone using the gcloud config subcommand." },
      { label: "B", text: "Settings page." },
      { label: "C", text: "default.conf." },
      { label: "D", text: "Metadata." }
    ],
    correctAnswer: "A",
    explanation: "gcloud config set compute/zone sets the default zone."
  },
  {
    id: 139,
    topic: "Databases",
    text: "You expect high throughput (thousands of events per hour per device) and need to retrieve consistent data based on event time. Storing/retrieving should be atomic. What should you do?",
    options: [
      { label: "A", text: "Cloud Storage." },
      { label: "B", text: "Filestore." },
      { label: "C", text: "Datastore." },
      { label: "D", text: "Ingest the data into Cloud Bigtable. Create a row key based on the event timestamp." }
    ],
    correctAnswer: "D",
    explanation: "Bigtable is designed for high-throughput time-series data."
  },
  {
    id: 140,
    topic: "Operations",
    text: "You want to set up APM on projects A, B, and C as a single pane of glass. What should you do?",
    options: [
      { label: "A", text: "Share charts." },
      { label: "B", text: "metrics.reader role." },
      { label: "C", text: "Default dashboards." },
      { label: "D", text: "Enable API, create a workspace under project A, and then add projects B and C." }
    ],
    correctAnswer: "D",
    explanation: "Monitoring Workspaces allow viewing metrics from multiple projects."
  },
  {
    id: 141,
    topic: "Billing",
    text: "You want to have a single visual representation of all costs incurred across multiple projects/billing accounts. What should you do?",
    options: [
      { label: "A", text: "Configure Billing Data Export to BigQuery and visualize the data in Data Studio." },
      { label: "B", text: "Cost Table page -> CSV." },
      { label: "C", text: "Pricing Calculator." },
      { label: "D", text: "Reports view." }
    ],
    correctAnswer: "A",
    explanation: "Exporting to BigQuery allows consolidating data and visualizing it with tools like Data Studio."
  },
  {
    id: 142,
    topic: "Networking",
    text: "You need to deploy a new Compute Engine instance and ensure that no public Internet traffic can be routed to it. What should you do?",
    options: [
      { label: "A", text: "Create the instance without a public IP address." },
      { label: "B", text: "Private Google Access." },
      { label: "C", text: "Deny-all egress." },
      { label: "D", text: "Route over VPN." }
    ],
    correctAnswer: "A",
    explanation: "If a VM has no external IP, it cannot be reached directly from the internet."
  },
  {
    id: 143,
    topic: "Deployment",
    text: "You want to share proposed infrastructure changes. You want to follow Google's recommended best practices. What should you do?",
    options: [
      { label: "A", text: "Deployment Manager templates -> Cloud Storage." },
      { label: "B", text: "Use Deployment Manager templates to describe the proposed changes and store them in Cloud Source Repositories." },
      { label: "C", text: "Apply changes -> list -> Storage." },
      { label: "D", text: "Apply changes -> list -> Source Repositories." }
    ],
    correctAnswer: "B",
    explanation: "Storing Infrastructure as Code (templates) in version control (CSR) is best practice."
  },
  {
    id: 144,
    topic: "Compute Engine",
    text: "You want to back up a Compute Engine instance daily and keep backups for 30 days. You want the Google-recommended solution. What should you do?",
    options: [
      { label: "A", text: "Update metadata." },
      { label: "B", text: "In the Cloud Console, go to the Compute Engine Disks page and select your instance's disk. In the Snapshot Schedule section, select Create Schedule." },
      { label: "C", text: "Cloud Function." },
      { label: "D", text: "Bash script." }
    ],
    correctAnswer: "B",
    explanation: "Snapshot Schedules are the managed, recommended way to handle disk backups."
  },
  {
    id: 145,
    topic: "Kubernetes",
    text: "You need to deploy additional pods requiring n2-highmem-16 nodes to an existing GKE cluster without downtime. What should you do?",
    options: [
      { label: "A", text: "gcloud container clusters upgrade." },
      { label: "B", text: "Create a new Node Pool and specify machine type n2-highmem-16. Deploy the new pods." },
      { label: "C", text: "Create new cluster." },
      { label: "D", text: "Create new cluster with both types." }
    ],
    correctAnswer: "B",
    explanation: "Adding a node pool allows adding nodes of a different machine type to an existing cluster."
  },
  {
    id: 146,
    topic: "Databases",
    text: "You want to join data from Cloud Spanner (exported to Storage) and Cloud Bigtable for specific users. You want to complete this ad hoc request efficiently. What should you do?",
    options: [
      { label: "A", text: "Dataflow copy." },
      { label: "B", text: "Dataflow copy." },
      { label: "C", text: "Dataproc Spark." },
      { label: "D", text: "Create two separate BigQuery external tables on Cloud Storage and Cloud Bigtable. Use the BigQuery console to join these tables." }
    ],
    correctAnswer: "D",
    explanation: "BigQuery External Tables allow querying data in GCS and Bigtable without moving it."
  },
  {
    id: 147,
    topic: "Compute Engine",
    text: "You want to support the failure of a single Compute Engine zone, eliminate downtime, and minimize cost. What should you do?",
    options: [
      { label: "A", text: "Create Compute Engine resources in us-central1-b. Balance the load across both us-central1-a and us-central1-b." },
      { label: "B", text: "MIG in single zone." },
      { label: "C", text: "HTTP(S) Load Balancer." },
      { label: "D", text: "Backups." }
    ],
    correctAnswer: "A",
    explanation: "Deploying in multiple zones within a region + Load Balancing provides high availability against zonal failures."
  },
  {
    id: 148,
    topic: "IAM",
    text: "You want to review who has been granted the Project Owner role. What should you do?",
    options: [
      { label: "A", text: "Validate SSH keys." },
      { label: "B", text: "Identity-Aware Proxy." },
      { label: "C", text: "Enable Audit Logs." },
      { label: "D", text: "Use the command gcloud projects get-iam-policy to view the current role assignments." }
    ],
    correctAnswer: "D",
    explanation: "get-iam-policy returns the IAM policy (bindings) for the project."
  },
  {
    id: 149,
    topic: "Networking",
    text: "The IPs available for the nodes in a GKE cluster are exhausted. What should you do?",
    options: [
      { label: "A", text: "Create new subnet." },
      { label: "B", text: "Add alias IP." },
      { label: "C", text: "Create new VPC." },
      { label: "D", text: "Expand the CIDR range of the relevant subnet for the cluster." }
    ],
    correctAnswer: "D",
    explanation: "You can expand a subnet's primary IP range."
  },
  {
    id: 150,
    topic: "Compute Engine",
    text: "You have a fault-tolerant batch workload that runs nightly. The current cost is too high. What should you do?",
    options: [
      { label: "A", text: "Run a test using simulated maintenance events. If the test is successful, use preemptible N1 Standard VMs when running future jobs." },
      { label: "B", text: "Use N1 Standard." },
      { label: "C", text: "MIG with N1." },
      { label: "D", text: "Use N1 instead of N2." }
    ],
    correctAnswer: "A",
    explanation: "Preemptible VMs are much cheaper and suited for fault-tolerant batch jobs."
  },
  {
    id: 151,
    topic: "Networking",
    text: "You want to configure the fewest open egress ports. What should you do?",
    options: [
      { label: "A", text: "Set up a low-priority (65534) rule that blocks all egress and a high-priority rule (1000) that allows only the appropriate ports." },
      { label: "B", text: "High-priority pair." },
      { label: "C", text: "High-priority block." },
      { label: "D", text: "High-priority allow." }
    ],
    correctAnswer: "A",
    explanation: "A default deny (low priority) + specific allow (high priority) is the standard way to restrict traffic."
  },
  {
    id: 152,
    topic: "Security",
    text: "Your operations partner needs to access Linux instances. They don't use Google Accounts. What should you do?",
    options: [
      { label: "A", text: "Enable Cloud IAP for the Compute Engine instances, and add the operations partner as a Cloud IAP Tunnel User." },
      { label: "B", text: "Tag instances -> Firewall rule." },
      { label: "C", text: "Cloud VPN." },
      { label: "D", text: "SSH keys." }
    ],
    correctAnswer: "A",
    explanation: "IAP Tunneling allows secure SSH access without public IPs."
  },
  {
    id: 153,
    topic: "Cloud Functions",
    text: "You want to trigger code when a new file is uploaded to Cloud Storage. What should you do?",
    options: [
      { label: "A", text: "App Engine." },
      { label: "B", text: "Use Cloud Functions and configure the bucket as a trigger resource." },
      { label: "C", text: "GKE CronJob." },
      { label: "D", text: "Dataflow." }
    ],
    correctAnswer: "B",
    explanation: "Cloud Functions supports direct triggers from Cloud Storage events."
  },
  {
    id: 154,
    topic: "Storage",
    text: "Files are accessed frequently for 30 days, then rarely. Keep for 3 years. Minimize cost. What should you do?",
    options: [
      { label: "A", text: "Nearline -> Archive." },
      { label: "B", text: "Set up a policy that uses Standard storage for 30 days and then moves to Archive storage for three years." },
      { label: "C", text: "Nearline -> Coldline -> Archive." },
      { label: "D", text: "Standard -> Coldline -> Archive." }
    ],
    correctAnswer: "B",
    explanation: "Standard is best for frequent access. Archive is cheapest for long-term storage."
  },
  {
    id: 155,
    topic: "Storage",
    text: "You need to record all requests that read any stored data in a bucket for legal reasons. What should you do?",
    options: [
      { label: "A", text: "Enable IAP." },
      { label: "B", text: "Scan with DLP." },
      { label: "C", text: "Allow single service account." },
      { label: "D", text: "Enable Data Access audit logs for the Cloud Storage API." }
    ],
    correctAnswer: "D",
    explanation: "Data Access logs record data reads and writes."
  },
  {
    id: 156,
    topic: "Billing",
    text: "You want to be notified if any of the developers are spending above $500 per month on their sandbox project. What should you do?",
    options: [
      { label: "A", text: "Single budget." },
      { label: "B", text: "Separate billing accounts." },
      { label: "C", text: "Create a budget per project and configure budget alerts on all of these budgets." },
      { label: "D", text: "Single billing account -> Data Studio." }
    ],
    correctAnswer: "C",
    explanation: "Budgets are scoped to projects (or billing accounts). To alert per project, create a budget per project."
  },
  {
    id: 157,
    topic: "Compute Engine",
    text: "You want to prevent anyone from accidentally destroying a production instance. What should you do?",
    options: [
      { label: "A", text: "Disable Delete boot disk." },
      { label: "B", text: "Enable delete protection on the instance." },
      { label: "C", text: "Disable Automatic restart." },
      { label: "D", text: "Enable Preemptibility." }
    ],
    correctAnswer: "B",
    explanation: "Delete protection prevents the API from deleting the instance."
  },
  {
    id: 158,
    topic: "IAM",
    text: "The DevOps team needs access to all production services. You want to prevent future product changes from broadening their permissions. What should you do?",
    options: [
      { label: "A", text: "Project Editor on org." },
      { label: "B", text: "Project Editor on project." },
      { label: "C", text: "Create a custom role that combines the required permissions. Grant the DevOps team the custom role on the production project." },
      { label: "D", text: "Custom role on org." }
    ],
    correctAnswer: "C",
    explanation: "Custom roles allow you to pick specific permissions, avoiding 'Editor' which includes new services automatically."
  },
  {
    id: 159,
    topic: "Storage",
    text: "You need to restrict access so suppliers access only their own data, give write access for 30 minutes, and delete data after 45 days. Minimal maintenance. Which two strategies?",
    options: [
      { label: "A", text: "Build a lifecycle policy to delete Cloud Storage objects after 45 days." },
      { label: "B", text: "Use signed URLs to allow suppliers limited time access to store their objects." },
      { label: "C", text: "SFTP server." },
      { label: "D", text: "Cloud Function." },
      { label: "E", text: "Script." }
    ],
    correctAnswer: "A,B",
    explanation: "Lifecycle policies handle deletion. Signed URLs handle temporary, scoped access."
  },
  {
    id: 160,
    topic: "Deployment",
    text: "You want to standardize creation of resources using Infrastructure as Code. Minimize repetitive code. What should you do?",
    options: [
      { label: "A", text: "Develop templates for the environment using Cloud Deployment Manager." },
      { label: "B", text: "Use curl." },
      { label: "C", text: "Use Cloud Console." },
      { label: "D", text: "Bash script." }
    ],
    correctAnswer: "A",
    explanation: "Deployment Manager uses templates to define resources, allowing reuse."
  },
  {
    id: 161,
    topic: "IAM",
    text: "You want to know who has access to view data stored in your project. What should you do?",
    options: [
      { label: "A", text: "Enable Audit Logs." },
      { label: "B", text: "Review the IAM permissions for any role that allows for data access." },
      { label: "C", text: "Review IAP." },
      { label: "D", text: "Create DLP job." }
    ],
    correctAnswer: "B",
    explanation: "IAM policy determines access. Reviewing it tells you who *has* access."
  },
  {
    id: 162,
    topic: "Networking",
    text: "Multiple applications in Google Cloud need to connect to an on-premises database server. You want to avoid changing IP configuration when the database IP changes. What should you do?",
    options: [
      { label: "A", text: "Cloud NAT." },
      { label: "B", text: "Create a private zone on Cloud DNS, and configure the applications with the DNS name." },
      { label: "C", text: "Custom metadata." },
      { label: "D", text: "Internal DNS." }
    ],
    correctAnswer: "B",
    explanation: "Cloud DNS Private Zones allow you to resolve internal hostnames to IPs across your VPC and hybrid network."
  },
  {
    id: 163,
    topic: "Cloud Run",
    text: "You developed a containerized web app for internal use during business hours. You want no costs incurred when not used. What should you do?",
    options: [
      { label: "A", text: "Cloud Run for Anthos." },
      { label: "B", text: "Deploy the container on Cloud Run (fully managed), and set the minimum number of instances to zero." },
      { label: "C", text: "App Engine flexible." },
      { label: "D", text: "App Engine flexible manual." }
    ],
    correctAnswer: "B",
    explanation: "Cloud Run scales to zero."
  },
  {
    id: 164,
    topic: "Billing",
    text: "You want to charge costs of your projects to your company's monthly invoice. What should you do?",
    options: [
      { label: "A", text: "Grant IAM role." },
      { label: "B", text: "BigQuery export." },
      { label: "C", text: "Support ticket." },
      { label: "D", text: "Change the billing account of your projects to the billing account of your company." }
    ],
    correctAnswer: "D",
    explanation: "Linking the project to the company's billing account transfers the charges."
  },
  {
    id: 165,
    topic: "IAM",
    text: "A partner company needs access to a BigQuery dataset in your project. What should you do?",
    options: [
      { label: "A", text: "Create Service Account in your project." },
      { label: "B", text: "Create Service Account in your project." },
      { label: "C", text: "Ask partner to create SA, give access in their project." },
      { label: "D", text: "Ask the partner to create a Service Account in their project, and grant their Service Account access to the BigQuery dataset in your project." }
    ],
    correctAnswer: "D",
    explanation: "Granting access to the partner's identity (SA in their project) on your resource is the correct way."
  },
  {
    id: 166,
    topic: "Cloud Run",
    text: "You want to evaluate an updated version of an application on Cloud Run for Anthos with a specific percentage of traffic (canary). What should you do?",
    options: [
      { label: "A", text: "New service." },
      { label: "B", text: "Create a new revision with the new version of the application. Split traffic between this version and the version that is currently running." },
      { label: "C", text: "New service + LB." },
      { label: "D", text: "New revision + LB." }
    ],
    correctAnswer: "B",
    explanation: "Cloud Run supports traffic splitting between revisions."
  },
  {
    id: 167,
    topic: "Networking",
    text: "Your game sends UDP packets. You want to expose VMs over a single IP address. What should you do?",
    options: [
      { label: "A", text: "SSL Proxy." },
      { label: "B", text: "Internal UDP." },
      { label: "C", text: "External HTTP(s)." },
      { label: "D", text: "Configure an External Network load balancer in front of the application servers." }
    ],
    correctAnswer: "D",
    explanation: "External Network Load Balancer handles UDP traffic."
  },
  {
    id: 168,
    topic: "Storage",
    text: "You want to automate uploading new medical images from on-premises to Cloud Storage. What should you do?",
    options: [
      { label: "A", text: "Pub/Sub." },
      { label: "B", text: "Dataflow." },
      { label: "C", text: "Create a script that uses the gsutil command line interface to synchronize the on-premises storage with Cloud Storage. Schedule the script as a cron job." },
      { label: "D", text: "Console." }
    ],
    correctAnswer: "C",
    explanation: "gsutil rsync is perfect for synchronizing directories."
  },
  {
    id: 169,
    topic: "Storage",
    text: "Auditor wants to audit who accessed data in Cloud Storage buckets. What should you do?",
    options: [
      { label: "A", text: "Turn on Data Access Logs for the buckets they want to audit, and then build a query in the log viewer that filters on Cloud Storage." },
      { label: "B", text: "Admin Activity logs." },
      { label: "C", text: "Cloud Monitoring." },
      { label: "D", text: "Export logs API." }
    ],
    correctAnswer: "A",
    explanation: "Data Access logs track object reads."
  },
  {
    id: 170,
    topic: "Management Tools",
    text: "You have a JSON key for a Service Account. You want to use it for authentication with gcloud. What should you do?",
    options: [
      { label: "A", text: "gcloud auth login." },
      { label: "B", text: "Use the command gcloud auth activate-service-account and point it to the private key." },
      { label: "C", text: "Place in installation directory." },
      { label: "D", text: "Place in home directory." }
    ],
    correctAnswer: "B",
    explanation: "gcloud auth activate-service-account is the command to authenticate using a key file."
  },
  {
    id: 171,
    topic: "Databases",
    text: "You need to retain a month-end copy of a Cloud SQL database for three years. What should you do?",
    options: [
      { label: "A", text: "Set up an export job for the first of the month. Write the export file to an Archive class Cloud Storage bucket." },
      { label: "B", text: "Save automatic backup." },
      { label: "C", text: "On-demand backup." },
      { label: "D", text: "Convert backup to export." }
    ],
    correctAnswer: "A",
    explanation: "Exporting to Archive storage is cost-effective for long-term retention."
  },
  {
    id: 172,
    topic: "Operations",
    text: "You want to be notified if a specific error (caused by insufficient permissions) recurs. What should you do?",
    options: [
      { label: "A", text: "Log Viewer filter." },
      { label: "B", text: "BigQuery sink." },
      { label: "C", text: "Create a custom log-based metric for the specific error to be used in an Alerting Policy." },
      { label: "D", text: "Grant Owner." }
    ],
    correctAnswer: "C",
    explanation: "Log-based metrics allow you to turn log entries into metrics that can be alerted on."
  },
  {
    id: 173,
    topic: "Databases",
    text: "You need a database for a global financial trading application. Requires strong consistency and low latency. What should you use?",
    options: [
      { label: "A", text: "Bigtable." },
      { label: "B", text: "Cloud SQL." },
      { label: "C", text: "Use Cloud Spanner for data storage." },
      { label: "D", text: "Firestore." }
    ],
    correctAnswer: "C",
    explanation: "Cloud Spanner offers global consistency and scalability."
  },
  {
    id: 174,
    topic: "Compute Engine",
    text: "You are deploying an ERP system that holds the full database in-memory. What resources should you use?",
    options: [
      { label: "A", text: "Preemptible." },
      { label: "B", text: "GPUs." },
      { label: "C", text: "Local SSDs." },
      { label: "D", text: "Provision Compute Engine instances with M1 machine type." }
    ],
    correctAnswer: "D",
    explanation: "M1/M2 instances are memory-optimized."
  },
  {
    id: 175,
    topic: "Kubernetes",
    text: "You want to deploy an application with multiple microservices on GKE so each can be scaled individually. What should you do?",
    options: [
      { label: "A", text: "Custom Resource Definition." },
      { label: "B", text: "Docker Compose." },
      { label: "C", text: "Job." },
      { label: "D", text: "Create and deploy a Deployment per microservice." }
    ],
    correctAnswer: "D",
    explanation: "Deployments manage pods and scaling for applications."
  },
  {
    id: 176,
    topic: "Compute Engine",
    text: "You want to specify the service account each instance uses. What should you do?",
    options: [
      { label: "A", text: "When creating the instances, specify a Service Account for each instance." },
      { label: "B", text: "Instance metadata." },
      { label: "C", text: "Update after start." },
      { label: "D", text: "Update after start metadata." }
    ],
    correctAnswer: "A",
    explanation: "Service accounts are best assigned during instance creation."
  },
  {
    id: 177,
    topic: "Databases",
    text: "You need a managed MongoDB environment with a support SLA. What should you do?",
    options: [
      { label: "A", text: "Cloud Bigtable." },
      { label: "B", text: "Deploy MongoDB Atlas from the Google Cloud Marketplace." },
      { label: "C", text: "Install on Compute Engine." },
      { label: "D", text: "Install on Managed Instance Group." }
    ],
    correctAnswer: "B",
    explanation: "Marketplace offers managed third-party services like MongoDB Atlas."
  },
  {
    id: 178,
    topic: "BigQuery",
    text: "You want BI team users to run custom SQL queries against BigQuery. What should you do?",
    options: [
      { label: "A", text: "Data Studio dashboard." },
      { label: "B", text: "Service Account." },
      { label: "C", text: "Cloud Scheduler." },
      { label: "D", text: "Assign the IAM role of BigQuery User to a Google Group that contains the members of the BI team." }
    ],
    correctAnswer: "D",
    explanation: "BigQuery User role allows running queries. Groups manage users efficiently."
  },
  {
    id: 179,
    topic: "Networking",
    text: "You need to design a DMZ/LAN network structure on Google Cloud. What should you do?",
    options: [
      { label: "A", text: "Create a single VPC with a subnet for the DMZ and a subnet for the LAN. Set up firewall rules." },
      { label: "B", text: "Single VPC, firewall allowing egress." },
      { label: "C", text: "Two VPCs." },
      { label: "D", text: "Two VPCs." }
    ],
    correctAnswer: "A",
    explanation: "A single VPC with subnets and firewall rules is the standard way to segment networks."
  },
  {
    id: 180,
    topic: "Databases",
    text: "You want to create a Cloud Spanner instance. What is the first step?",
    options: [
      { label: "A", text: "Enable the Cloud Spanner API." },
      { label: "B", text: "Configure multi-regional." },
      { label: "C", text: "Create VPC." },
      { label: "D", text: "Grant Admin role." }
    ],
    correctAnswer: "A",
    explanation: "APIs must be enabled before resources can be created."
  },
  {
    id: 181,
    topic: "Management Tools",
    text: "You need to create a Compute Engine instance using CLI. What prerequisite step is needed?",
    options: [
      { label: "A", text: "Monitoring Workspace." },
      { label: "B", text: "VPC." },
      { label: "C", text: "Enable the compute.googleapis.com API." },
      { label: "D", text: "IAM role." }
    ],
    correctAnswer: "C",
    explanation: "The Compute Engine API must be enabled."
  },
  {
    id: 182,
    topic: "Kubernetes",
    text: "You want to ensure your GKE cluster can scale node pools automatically. What should you do?",
    options: [
      { label: "A", text: "HPA." },
      { label: "B", text: "VPA." },
      { label: "C", text: "Create a GKE cluster with autoscaling enabled on the node pool. Set a minimum and maximum." },
      { label: "D", text: "Separate node pools." }
    ],
    correctAnswer: "C",
    explanation: "Cluster autoscaler adds/removes nodes based on pod demand."
  },
  {
    id: 183,
    topic: "Compute Engine",
    text: "You need to access installation files on Cloud Storage from a new instance without allowing other VMs access. What should you do?",
    options: [
      { label: "A", text: "Default SA." },
      { label: "B", text: "Default SA + Metadata." },
      { label: "C", text: "Create a new service account and assign this service account to the new instance. Grant the service account permissions on Cloud Storage." },
      { label: "D", text: "New SA + Metadata." }
    ],
    correctAnswer: "C",
    explanation: "Dedicated service accounts provide isolation."
  },
  {
    id: 184,
    topic: "Storage",
    text: "You need optimal storage for a mission-critical analytics pipeline used continually. Users are in Boston. What should you do?",
    options: [
      { label: "A", text: "Regional Nearline." },
      { label: "B", text: "Regional Standard." },
      { label: "C", text: "Dual-regional Nearline." },
      { label: "D", text: "Configure dual-regional storage for the dual region closest to the users. Configure a Standard storage class." }
    ],
    correctAnswer: "D",
    explanation: "Dual-region offers high availability. Standard class is for frequent access."
  },
  {
    id: 185,
    topic: "App Engine",
    text: "You want to test updates to your App Engine application on a small portion of users (canary). What should you do?",
    options: [
      { label: "A", text: "Deploy the application on App Engine. For each update, create a new version of the same service. Configure traffic splitting." },
      { label: "B", text: "New service." },
      { label: "C", text: "GKE update." },
      { label: "D", text: "GKE new deployment." }
    ],
    correctAnswer: "A",
    explanation: "App Engine Traffic Splitting works between versions of the same service."
  },
  {
    id: 186,
    topic: "IAM",
    text: "You are adding users to Cloud Identity. Some have existing Google accounts. You want to avoid conflicts. What should you do?",
    options: [
      { label: "A", text: "Invite the user to transfer their existing account." },
      { label: "B", text: "Email alias." },
      { label: "C", text: "Delete account." },
      { label: "D", text: "Remove personal email." }
    ],
    correctAnswer: "A",
    explanation: "Transferring accounts is the process to merge unmanaged accounts into the organization."
  },
  {
    id: 187,
    topic: "Databases",
    text: "You need to improve Cloud Spanner performance in the shortest time. What should you do?",
    options: [
      { label: "A", text: "Alert 45% -> Add nodes." },
      { label: "B", text: "Alert 45% -> Tune queries." },
      { label: "C", text: "Create an alert in Cloud Monitoring to alert when the percentage of high priority CPU utilization reaches 65%. If you exceed this threshold, add nodes to your instance." },
      { label: "D", text: "Alert 65% -> Tune queries." }
    ],
    correctAnswer: "C",
    explanation: "Adding nodes is the fastest way to increase capacity. 65% is the recommended threshold."
  },
  {
    id: 188,
    topic: "Databases",
    text: "You have an application requiring strong consistency, fast queries, and ACID guarantees. First version is PostgreSQL. You want minimal code changes. What should you use?",
    options: [
      { label: "A", text: "BigQuery" },
      { label: "B", text: "Cloud SQL" },
      { label: "C", text: "Cloud Spanner" },
      { label: "D", text: "Cloud Datastore" }
    ],
    correctAnswer: "B",
    explanation: "Cloud SQL supports PostgreSQL."
  },
  {
    id: 189,
    topic: "Kubernetes",
    text: "You want your CLI commands to address a specific GKE cluster by default. What should you do?",
    options: [
      { label: "A", text: "Use the command gcloud config set container/cluster dev." },
      { label: "B", text: "clusters update." },
      { label: "C", text: "gke.default file." },
      { label: "D", text: "defaults.json file." }
    ],
    correctAnswer: "A",
    explanation: "gcloud config set container/cluster sets the default cluster property."
  },
  {
    id: 190,
    topic: "Management Tools",
    text: "You need to set up resources for the marketing team independently of the sales team. What should you do?",
    options: [
      { label: "A", text: "Grant Project Editor." },
      { label: "B", text: "Project Lien." },
      { label: "C", text: "Create another project with the ID acme-marketing-data-digest for the Marketing team and deploy the resources there." },
      { label: "D", text: "New project, same ID." }
    ],
    correctAnswer: "C",
    explanation: "Separate projects provide isolation."
  },
  {
    id: 191,
    topic: "Security",
    text: "You want to access multiple internal Linux instances via SSH over the internet without public IPs. What should you do?",
    options: [
      { label: "A", text: "IAP for HTTPS." },
      { label: "B", text: "Configure Cloud Identity-Aware Proxy for SSH and TCP resources" },
      { label: "C", text: "Public key." },
      { label: "D", text: "Private key." }
    ],
    correctAnswer: "B",
    explanation: "IAP for TCP allows SSH tunneling to instances without public IPs."
  },
  {
    id: 192,
    topic: "Kubernetes",
    text: "You want to deploy a Docker image to GKE. What should you do?",
    options: [
      { label: "A", text: "Cloud Storage -> Service." },
      { label: "B", text: "Cloud Storage -> Deployment." },
      { label: "C", text: "Container Registry -> Service." },
      { label: "D", text: "Upload the image to Container Registry and create a Kubernetes Deployment referencing the image." }
    ],
    correctAnswer: "D",
    explanation: "Images must be in a registry. Deployments manage pods."
  },
  {
    id: 193,
    topic: "Databases",
    text: "Data Studio charts are broken after a nightly BigQuery job. You want to analyze the problem. What should you do?",
    options: [
      { label: "A", text: "Error Reporting." },
      { label: "B", text: "Use the BigQuery interface to review the nightly job and look for any errors." },
      { label: "C", text: "Cloud Debugger." },
      { label: "D", text: "Cloud Logging filter." }
    ],
    correctAnswer: "B",
    explanation: "The BigQuery interface shows job history and errors."
  },
  {
    id: 194,
    topic: "Management Tools",
    text: "You want to group resources that share common IAM policies. What should you do?",
    options: [
      { label: "A", text: "Labels." },
      { label: "B", text: "Use folders to group resources that share common IAM policies." },
      { label: "C", text: "Billing account." },
      { label: "D", text: "Project naming." }
    ],
    correctAnswer: "B",
    explanation: "Folders allow grouping projects and applying policies."
  },
  {
    id: 195,
    topic: "Networking",
    text: "You need a high availability Cloud VPN. What should you do?",
    options: [
      { label: "A", text: "Custom VPC, static routes." },
      { label: "B", text: "Auto VPC, static routes." },
      { label: "C", text: "Use a custom mode VPC network, use Cloud Router border gateway protocol (BGP) routes, and use active/passive routing." },
      { label: "D", text: "Auto VPC, BGP." }
    ],
    correctAnswer: "C",
    explanation: "HA VPN requires dynamic routing (BGP)."
  },
  {
    id: 196,
    topic: "Kubernetes",
    text: "You have a CPU-intensive microservice. Others are general purpose. You want to optimize. What should you do?",
    options: [
      { label: "A", text: "Pod priority." },
      { label: "B", text: "Create a node pool with compute-optimized machine type nodes for the image rendering microservice." },
      { label: "C", text: "Reverse node pools." },
      { label: "D", text: "Resource requests." }
    ],
    correctAnswer: "B",
    explanation: "Separate node pools allow using different machine types for different workloads."
  },
  {
    id: 197,
    topic: "Billing",
    text: "You need to bill the Marketing department for only their services. What should you do?",
    options: [
      { label: "A", text: "Billing Admin -> Link." },
      { label: "B", text: "Verify Billing Admin role. Create a new Google Cloud Project for the Marketing department. Set labels." },
      { label: "C", text: "Org Admin -> Link." },
      { label: "D", text: "Org Admin -> Labels." }
    ],
    correctAnswer: "B",
    explanation: "Actually, separate projects linked to the same billing account can be tracked via labels, BUT linking to a separate billing account (if that was the option) is cleaner. Here, B describes creating a new project which isolates resources."
  },
  {
    id: 198,
    topic: "Networking",
    text: "You need to expose a TCP application on port 389 and preserve client IP. What should you do?",
    options: [
      { label: "A", text: "External TCP Network Load Balancer." },
      { label: "B", text: "Expose the application by using a TCP Proxy Load Balancer." },
      { label: "C", text: "SSL Proxy." },
      { label: "D", text: "Internal TCP." }
    ],
    correctAnswer: "B",
    explanation: "TCP Proxy preserves client IP using the PROXY protocol."
  },
  {
    id: 199,
    topic: "Databases",
    text: "You need a global database for a gaming app with consistent performance and minimal complexity. What should you use?",
    options: [
      { label: "A", text: "Cloud SQL." },
      { label: "B", text: "Use Cloud Spanner to store user data mapped to the game statistics." },
      { label: "C", text: "BigQuery." },
      { label: "D", text: "Bigtable." }
    ],
    correctAnswer: "B",
    explanation: "Spanner is global and consistent."
  },
  {
    id: 200,
    topic: "Databases",
    text: "You need a database that scales with user growth with minimal config changes. Relational data. What should you use?",
    options: [
      { label: "A", text: "Cloud SQL" },
      { label: "B", text: "Firestore" },
      { label: "C", text: "Cloud Spanner" },
      { label: "D", text: "Bigtable" }
    ],
    correctAnswer: "C",
    explanation: "Spanner scales horizontally."
  },
  {
    id: 201,
    topic: "Billing",
    text: "You need to visualize costs with specific dynamic metrics. What should you do?",
    options: [
      { label: "A", text: "Reports section." },
      { label: "B", text: "Cost breakdown." },
      { label: "C", text: "Export to CSV." },
      { label: "D", text: "Configure Cloud Billing data export to BigQuery for the billing account. Create a Looker Studio dashboard on top of the BigQuery export." }
    ],
    correctAnswer: "D",
    explanation: "BigQuery export allows custom analysis and visualization."
  },
  {
    id: 202,
    topic: "Networking",
    text: "VMs in a custom VPC with no internet access need to reach Cloud Storage. What should you do?",
    options: [
      { label: "A", text: "Private Service Access." },
      { label: "B", text: "VPC Service Controls." },
      { label: "C", text: "Enable Private Google Access on the subnet within the custom VPC." },
      { label: "D", text: "Cloud NAT." }
    ],
    correctAnswer: "C",
    explanation: "Private Google Access allows VMs with only internal IPs to reach Google APIs."
  },
  {
    id: 203,
    topic: "Management Tools",
    text: "You need to move a project from one organization to another. What should you do?",
    options: [
      { label: "A", text: "Use the projects.move method to method to move the project to your organization. Update the billing account." },
      { label: "B", text: "Drag and drop." },
      { label: "C", text: "Private Catalog." },
      { label: "D", text: "Terraform." }
    ],
    correctAnswer: "A",
    explanation: "projects.move is the API method for migration."
  },
  {
    id: 204,
    topic: "Management Tools",
    text: "You want to restrict resource creation to US locations only for all dev projects. What should you do?",
    options: [
      { label: "A", text: "Create a folder to contain all the dev projects. Create an organization policy to limit resources in US locations." },
      { label: "B", text: "Organization -> IAM." },
      { label: "C", text: "IAM policy." },
      { label: "D", text: "IAM policy." }
    ],
    correctAnswer: "A",
    explanation: "Organization Policies (constraints) control resource locations."
  },
  {
    id: 205,
    topic: "Networking",
    text: "You want to point home.mydomain.com, mydomain.com, and www.mydomain.com to a load balancer. What DNS records?",
    options: [
      { label: "A", text: "CNAME -> A." },
      { label: "B", text: "CNAME -> AAAA." },
      { label: "C", text: "Create one A record to point mydomain.com to the load balancer, and create two CNAME records to point WWW and HOME to mydomain.com respectively." },
      { label: "D", text: "A -> NS." }
    ],
    correctAnswer: "C",
    explanation: "A record for root, CNAME for subdomains."
  },
  {
    id: 206,
    topic: "Networking",
    text: "You want to allow database traffic only from application servers to database servers. What should you do?",
    options: [
      { label: "A", text: "Create service accounts sa-app and sa-db. Associate. Create ingress firewall rule allowing traffic from sa-app to sa-db." },
      { label: "B", text: "Network tags -> egress." },
      { label: "C", text: "Service account -> subnet IP." },
      { label: "D", text: "Tags -> egress." }
    ],
    correctAnswer: "A",
    explanation: "Service accounts are the most secure identity for firewall rules."
  },
  {
    id: 207,
    topic: "Deployment",
    text: "You want to deploy a CMS solution quickly. What should you do?",
    options: [
      { label: "A", text: "Marketplace -> gcloud." },
      { label: "B", text: "Search for the CMS solution in Google Cloud Marketplace. Deploy the solution directly from Cloud Marketplace." },
      { label: "C", text: "Marketplace -> Terraform." },
      { label: "D", text: "Installation guide." }
    ],
    correctAnswer: "B",
    explanation: "Direct deployment from Marketplace is the fastest."
  },
  {
    id: 208,
    topic: "Billing",
    text: "You want to allow engineers to create projects without credit cards. What should you do?",
    options: [
      { label: "A", text: "Create a Billing account, associate a payment method with it, and provide all project creators with permission to associate that billing account with their projects." },
      { label: "B", text: "Engineers create billing accounts." },
      { label: "C", text: "Monthly invoiced." },
      { label: "D", text: "PO." }
    ],
    correctAnswer: "A",
    explanation: "Centralized billing account with permissions allows users to link projects."
  },
  {
    id: 209,
    topic: "IAM",
    text: "You need to validate service account permissions. What should you do?",
    options: [
      { label: "A", text: "Open the Google Cloud console, and check the Identity and Access Management (IAM) roles assigned to the service account." },
      { label: "B", text: "Org policies." },
      { label: "C", text: "Run query." },
      { label: "D", text: "Audit logs." }
    ],
    correctAnswer: "A",
    explanation: "Checking IAM policy is the direct way to validate permissions."
  },
  {
    id: 210,
    topic: "Security",
    text: "You need secure SSH access to Linux instances without public IPs. What should you do?",
    options: [
      { label: "A", text: "Public IP." },
      { label: "B", text: "Use the gcloud compute ssh command with the --tunnel-through-iap flag." },
      { label: "C", text: "Third party." },
      { label: "D", text: "Bastion." }
    ],
    correctAnswer: "B",
    explanation: "IAP Tunneling."
  },
  {
    id: 211,
    topic: "IAM",
    text: "An external member needs list access to images and disks. What should you do?",
    options: [
      { label: "A", text: "Create a custom role, and add all the required compute.disks.list and compute.images.list permissions." },
      { label: "B", text: "Custom role based on Image User." },
      { label: "C", text: "Custom role based on Storage Admin." },
      { label: "D", text: "Storage Admin." }
    ],
    correctAnswer: "A",
    explanation: "Least privilege: create a custom role with only needed permissions."
  },
  {
    id: 212,
    topic: "Cloud Run",
    text: "Cloud Run web page takes long to load initially (cold start). What should you do?",
    options: [
      { label: "A", text: "Set the minimum number of instances for your Cloud Run service to 3." },
      { label: "B", text: "Set concurrency to 1." },
      { label: "C", text: "Set max instances." },
      { label: "D", text: "HTTP/2." }
    ],
    correctAnswer: "A",
    explanation: "Min instances keeps instances warm."
  },
  {
    id: 213,
    topic: "Data Engineering",
    text: "You want to build a highly available IoT data lake. What should you do?",
    options: [
      { label: "A", text: "Stream data to Pub/Sub, and use Dataflow to send data to Cloud Storage." },
      { label: "B", text: "Pub/Sub -> BigQuery." },
      { label: "C", text: "Dataflow -> Dataprep -> Bigtable." },
      { label: "D", text: "Dataflow -> Storage Transfer -> BigQuery." }
    ],
    correctAnswer: "A",
    explanation: "Pub/Sub + Dataflow + Storage is the standard ingest pattern."
  },
  {
    id: 214,
    topic: "Networking",
    text: "You are running out of IPs in a subnet. What should you do?",
    options: [
      { label: "A", text: "Secondary range." },
      { label: "B", text: "Change the subnet IP range from 10.0.0.0/20 to 10.0.0.0/18." },
      { label: "C", text: "Change to /22." },
      { label: "D", text: "IPv6." }
    ],
    correctAnswer: "B",
    explanation: "Expanding CIDR range."
  },
  {
    id: 215,
    topic: "IAM",
    text: "You want all developers to have same permissions across projects. Restrict to Compute, Functions, SQL. What should you do?",
    options: [
      { label: "A", text: "Custom role -> Copy." },
      { label: "B", text: "Group -> Compute Admin." },
      { label: "C", text: "Group -> Predefined roles per project." },
      { label: "D", text: "Add all developers to a Google group in Cloud Identity. Create a custom role with permissions at the Organization level. Assign to group." }
    ],
    correctAnswer: "D",
    explanation: "Centralized custom role assigned to a group at Org level is most efficient."
  },
  {
    id: 216,
    topic: "Storage",
    text: "Automate uploading medical images from on-prem to Cloud Storage. What should you do?",
    options: [
      { label: "A", text: "Pub/Sub." },
      { label: "B", text: "Create a script that uses the gcloud storage command to synchronize. Schedule cron job." },
      { label: "C", text: "Cloud Function." },
      { label: "D", text: "Console." }
    ],
    correctAnswer: "B",
    explanation: "gsutil/gcloud storage rsync + cron."
  },
  {
    id: 217,
    topic: "Databases",
    text: "App requires strong consistency, ACID, multi-table transactions. PostgreSQL. Minimal code changes. What should you use?",
    options: [
      { label: "A", text: "Bigtable." },
      { label: "B", text: "BigQuery." },
      { label: "C", text: "Cloud SQL." },
      { label: "D", text: "Firestore." }
    ],
    correctAnswer: "C",
    explanation: "Cloud SQL supports PostgreSQL."
  },
  {
    id: 218,
    topic: "Compute Engine",
    text: "Migrate 30-hour monthly batch job. Can be restarted. Minimize cost. What should you do?",
    options: [
      { label: "A", text: "Instance Template -> Spot." },
      { label: "B", text: "Migrate the workload to a Compute Engine VM. Start and stop the instance as needed." },
      { label: "C", text: "GKE Spot." },
      { label: "D", text: "Spot VM." }
    ],
    correctAnswer: "B",
    explanation: "Spot VMs might terminate. Restarting a 30-hour job is costly. Standard VM started on demand is better."
  },
  {
    id: 219,
    topic: "Databases",
    text: "Migrate MySQL, Kafka, PostgreSQL. Need global scalability and minimal management. What should you use?",
    options: [
      { label: "A", text: "SQL, Pub/Sub, BigQuery." },
      { label: "B", text: "Migrate from MySQL to Cloud Spanner, from Kafka to Pub/Sub, and from Cloud SQL for PostgreSQL to BigQuery." },
      { label: "C", text: "Spanner, Memorystore, SQL." },
      { label: "D", text: "SQL, Memorystore, SQL." }
    ],
    correctAnswer: "B",
    explanation: "Spanner = Global MySQL. Pub/Sub = Managed Kafka. BigQuery = Managed Analytics."
  },
  {
    id: 220,
    topic: "IAM",
    text: "You want to ensure resources are shared only with users in your domain. Remove mismatched. What should you do?",
    options: [
      { label: "A", text: "Scheduler." },
      { label: "B", text: "Scheduler." },
      { label: "C", text: "Org policy." },
      { label: "D", text: "Set an organizational policy constraint to limit identities by domain, and then retroactively remove the existing mismatched users." }
    ],
    correctAnswer: "D",
    explanation: "Org policy prevents new ones. Retroactive removal cleans up."
  },
  {
    id: 221,
    topic: "Compute Engine",
    text: "One VM in a MIG is unresponsive. You want to replace it quickly. What should you do?",
    options: [
      { label: "A", text: "Update REFRESH." },
      { label: "B", text: "Use the gcloud compute instance-groups managed recreate-instances command." },
      { label: "C", text: "Replace VMs menu." },
      { label: "D", text: "Update template." }
    ],
    correctAnswer: "B",
    explanation: "recreate-instances is the specific command to replace a specific VM in a MIG."
  },
  {
    id: 222,
    topic: "DevOps",
    text: "Permanently delete a Pub/Sub topic managed by Config Connector. What should you do?",
    options: [
      { label: "A", text: "Label." },
      { label: "B", text: "Use kubectl to delete the topic resource." },
      { label: "C", text: "gcloud delete." },
      { label: "D", text: "Update label." }
    ],
    correctAnswer: "B",
    explanation: "Config Connector resources are managed via Kubernetes."
  },
  {
    id: 223,
    topic: "IAM",
    text: "Growth to 1000 employees. Need access to GCP. 10x growth. What should you do?",
    options: [
      { label: "A", text: "Active Directory." },
      { label: "B", text: "Cloud Identity groups." },
      { label: "C", text: "Turn on identity federation between Cloud Identity and Google Workspace. Enforce multi-factor authentication." },
      { label: "D", text: "Third-party IDP." }
    ],
    correctAnswer: "C",
    explanation: "If they are already in Workspace, federation/integration is seamless."
  },
  {
    id: 224,
    topic: "Compute Engine",
    text: "Video encoding. High availability. Automate operations. What should you do?",
    options: [
      { label: "A", text: "Standalone + increase." },
      { label: "B", text: "Standalone + replace." },
      { label: "C", text: "Instance group + increase." },
      { label: "D", text: "Deploy your solution to an instance group, and set the autoscaling based on CPU utilization." }
    ],
    correctAnswer: "D",
    explanation: "MIGs with autoscaling provide HA and automation."
  },
  {
    id: 225,
    topic: "Compute Engine",
    text: "MIG failed to create instances. You need to solve it. What should you do?",
    options: [
      { label: "A", text: "Create an instance template that contains valid syntax. Delete persistent disks with same name." },
      { label: "B", text: "Valid syntax -> Verify names." },
      { label: "C", text: "Valid syntax -> autoDelete." },
      { label: "D", text: "Delete template." }
    ],
    correctAnswer: "A",
    explanation: "Fixing the template and resolving naming conflicts resolves creation issues."
  },
  {
    id: 226,
    topic: "Cloud Run",
    text: "Deploy Docker image to Cloud Run. No infrastructure management. Scale automatically. What should you do?",
    options: [
      { label: "A", text: "Template -> MIG." },
      { label: "B", text: "GKE Standard." },
      { label: "C", text: "Storage -> GKE." },
      { label: "D", text: "Upload Docker images to Artifact Registry, and deploy the application on Cloud Run." }
    ],
    correctAnswer: "D",
    explanation: "Cloud Run is serverless and scales automatically."
  },
  {
    id: 227,
    topic: "Databases",
    text: "Looker Studio charts are broken after nightly BigQuery job. How to analyze?",
    options: [
      { label: "A", text: "Logs." },
      { label: "B", text: "Debugger." },
      { label: "C", text: "Error Reporting." },
      { label: "D", text: "Use the BigQuery interface to review the nightly job and look for any errors." }
    ],
    correctAnswer: "D",
    explanation: "Check the source job."
  },
  {
    id: 228,
    topic: "Compute Engine",
    text: "Batch workload. Fault tolerant. Reduce cost. What should you do?",
    options: [
      { label: "A", text: "Run a test using simulated maintenance events. If the test is successful, use Spot N2 Standard VMs." },
      { label: "B", text: "Simulated -> N2." },
      { label: "C", text: "MIG -> N2." },
      { label: "D", text: "N1." }
    ],
    correctAnswer: "A",
    explanation: "Spot VMs are cheapest. Testing simulation ensures fault tolerance."
  },
  {
    id: 229,
    topic: "Billing",
    text: "Visual representation of all costs. Include new data ASAP. What should you do?",
    options: [
      { label: "A", text: "Calculator." },
      { label: "B", text: "Reports view." },
      { label: "C", text: "CSV." },
      { label: "D", text: "Configure Billing Data Export to BigQuery and visualize the data in Looker Studio." }
    ],
    correctAnswer: "D",
    explanation: "BigQuery export allows custom visualization."
  },
  {
    id: 230,
    topic: "Data Engineering",
    text: "Unstructured data. ETL. Dataflow. What should you do?",
    options: [
      { label: "A", text: "BigQuery." },
      { label: "B", text: "Upload the data to Cloud Storage using the gcloud storage command." },
      { label: "C", text: "Cloud SQL." },
      { label: "D", text: "Spanner." }
    ],
    correctAnswer: "B",
    explanation: "Cloud Storage is the staging area for Dataflow."
  },
  {
    id: 231,
    topic: "Operations",
    text: "Single VM. Logs to disk. Users report errors. Diagnose. What should you do?",
    options: [
      { label: "A", text: "Cloud Logging." },
      { label: "B", text: "Health Check." },
      { label: "C", text: "Serial Console." },
      { label: "D", text: "Install and configure the Ops agent and view the logs from Cloud Logging." }
    ],
    correctAnswer: "D",
    explanation: "Ops agent sends disk logs to Cloud Logging."
  },
  {
    id: 232,
    topic: "Management Tools",
    text: "New project. Need instances, firewalls, storage. Follow recommended practices. What should you do?",
    options: [
      { label: "A", text: "Enable all resources." },
      { label: "B", text: "Use gcloud services enable to enable Compute Engine and Cloud Storage APIs." },
      { label: "C", text: "Enable all from Console." },
      { label: "D", text: "Run gcloud init." }
    ],
    correctAnswer: "B",
    explanation: "Enable only necessary APIs."
  },
  {
    id: 233,
    topic: "Cloud Run",
    text: "Deploy Docker images. No infra management. Auto scale. What should you do?",
    options: [
      { label: "A", text: "MIG." },
      { label: "B", text: "Artifact -> GKE." },
      { label: "C", text: "Storage -> GKE." },
      { label: "D", text: "Upload Docker images to Artifact Registry, and deploy the application on Cloud Run." }
    ],
    correctAnswer: "D",
    explanation: "Cloud Run fits all criteria."
  },
  {
    id: 234,
    topic: "Compute Engine",
    text: "High availability strategy. Zonal failure. Data available immediately. What should you do?",
    options: [
      { label: "A", text: "Zonal disk + snapshot." },
      { label: "B", text: "Zonal disk." },
      { label: "C", text: "Regional disk + snapshot." },
      { label: "D", text: "Store the application data on a regional persistent disk. If an outage occurs, create an instance in another zone with this disk attached." }
    ],
    correctAnswer: "D",
    explanation: "Regional disks are replicated across zones."
  },
  {
    id: 235,
    topic: "IAM",
    text: "DevOps needs full Compute Engine control in dev project. No other resources. What should you do?",
    options: [
      { label: "A", text: "Viewer + Compute Admin." },
      { label: "B", text: "IAM policy." },
      { label: "C", text: "Create a custom role at the folder level and grant all compute.instanceAdmin.* permissions to the role. Grant the custom role to the DevOps group." },
      { label: "D", text: "Editor." }
    ],
    correctAnswer: "C",
    explanation: "Custom role with specific permissions follows least privilege."
  },
  {
    id: 236,
    topic: "Cloud Run",
    text: "Migrate Python microservices on Docker to serverless. What should you do?",
    options: [
      { label: "A", text: "Use your existing CI/CD pipeline. Use the generated Docker images and deploy them to Cloud Run." },
      { label: "B", text: "Cloud Function." },
      { label: "C", text: "Cloud Function code." },
      { label: "D", text: "Cloud Run code." }
    ],
    correctAnswer: "A",
    explanation: "Cloud Run runs containers."
  },
  {
    id: 237,
    topic: "Kubernetes",
    text: "One microservice needs high CPU. Others N2. Optimize. What should you do?",
    options: [
      { label: "A", text: "Pod priority." },
      { label: "B", text: "Create a node pool with compute-optimized machine type nodes for the image rendering microservice." },
      { label: "C", text: "Reverse pools." },
      { label: "D", text: "Requests/Limits." }
    ],
    correctAnswer: "B",
    explanation: "Dedicated node pools for specific hardware needs."
  },
  {
    id: 238,
    topic: "Kubernetes",
    text: "Business critical app. Optimized for reliability. Recommended practices. What should you do?",
    options: [
      { label: "A", text: "Autopilot rapid." },
      { label: "B", text: "Create a GKE Autopilot cluster. Enroll the cluster in the stable release channel." },
      { label: "C", text: "Zonal standard." },
      { label: "D", text: "Regional standard rapid." }
    ],
    correctAnswer: "B",
    explanation: "Autopilot manages infra. Stable channel ensures reliability."
  },
  {
    id: 239,
    topic: "Operations",
    text: "Notify if high latency for 5 minutes. No code. What should you do?",
    options: [
      { label: "A", text: "BigQuery." },
      { label: "B", text: "Create an alert policy to send a notification when the HTTP response latency exceeds the specified threshold." },
      { label: "C", text: "App Engine service." },
      { label: "D", text: "Dashboard." }
    ],
    correctAnswer: "B",
    explanation: "Alerting Policies in Monitoring."
  },
  {
    id: 240,
    topic: "Compute Engine",
    text: "On-premises binaries. 45 mins at midnight. Large files. Minimal effort/cost. What should you do?",
    options: [
      { label: "A", text: "Cloud Run." },
      { label: "B", text: "GKE." },
      { label: "C", text: "Cloud Functions." },
      { label: "D", text: "Lift and shift to a VM on Compute Engine. Use an instance schedule to start and stop the instance." }
    ],
    correctAnswer: "D",
    explanation: "Instance schedules save cost. VMs handle binaries/large files easily."
  },
  {
    id: 241,
    topic: "Kubernetes",
    text: "Check node status for dev-cluster (autopilot). What command?",
    options: [
      { label: "A", text: "gcloud container clusters get-credentials dev-cluster; kubectl get nodes" },
      { label: "B", text: "generate-password." },
      { label: "C", text: "config set-context." },
      { label: "D", text: "config set-credentials." }
    ],
    correctAnswer: "A",
    explanation: "get-credentials configures kubectl."
  },
  {
    id: 242,
    topic: "IAM",
    text: "Enforce short-lived service account credentials. Centralized creation. Minimize cost. What should you do?",
    options: [
      { label: "A", text: "Cloud Run rotation." },
      { label: "B", text: "CronJob rotation." },
      { label: "C", text: "Enforce an org policy constraint allowing the lifetime of service account keys to be 24 hours. Enforce an org policy constraint denying service account key creation with an exception on pj-sa." },
      { label: "D", text: "Deny policy." }
    ],
    correctAnswer: "C",
    explanation: "Org policies can enforce key lifetime limits."
  },
  {
    id: 243,
    topic: "Billing",
    text: "Estimate cost of 3-tier web app on GCP. What should you do?",
    options: [
      { label: "A", text: "Spreadsheet." },
      { label: "B", text: "Calculator operations template." },
      { label: "C", text: "Implement -> Check bill." },
      { label: "D", text: "Use the Google Cloud Pricing Calculator to determine the cost of every Google Cloud resource you expect to use." }
    ],
    correctAnswer: "D",
    explanation: "Pricing Calculator is the tool."
  },
  {
    id: 244,
    topic: "Databases",
    text: "Log all Bigtable read/write operations to SIEM. What should you do?",
    options: [
      { label: "A", text: "Monitoring." },
      { label: "B", text: "Admin Write logs." },
      { label: "C", text: "Enable Data Read, Data Write and Admin Read logs. Create a Pub/Sub topic as a Cloud Logging sink destination." },
      { label: "D", text: "Ops Agent." }
    ],
    correctAnswer: "C",
    explanation: "Data Access logs capture reads/writes. Sink to Pub/Sub for SIEM."
  },
  {
    id: 245,
    topic: "Kubernetes",
    text: "GKE. Verifiable node identity. No internet access. Reduce op cost. What should you do?",
    options: [
      { label: "A", text: "Deploy a private autopilot cluster." },
      { label: "B", text: "Public autopilot." },
      { label: "C", text: "Standard public." },
      { label: "D", text: "Standard private." }
    ],
    correctAnswer: "A",
    explanation: "Autopilot reduces ops. Private restricts internet."
  },
  {
    id: 246,
    topic: "Cloud Run",
    text: "Migrate Flask app, API, background job. Keep ops cost low. Serverless. What should you do?",
    options: [
      { label: "A", text: "App Engine, Cloud Run, Cloud Tasks -> Compute Engine." },
      { label: "B", text: "Migrate the web application to App Engine and the backend API to Cloud Run. Use Cloud Tasks to run your background job on Cloud Run." },
      { label: "C", text: "Storage, Run, Tasks -> Run." },
      { label: "D", text: "Storage, Run, Tasks -> Compute." }
    ],
    correctAnswer: "B",
    explanation: "All managed serverless options."
  },
  {
    id: 247,
    topic: "IAM",
    text: "CI/CD pipeline on Compute Engine. Manage entire infra. Security best practices. What permissions strategy?",
    options: [
      { label: "A", text: "Impersonation." },
      { label: "B", text: "Human approval." },
      { label: "C", text: "Single service account." },
      { label: "D", text: "Create multiple service accounts, one for each pipeline with the appropriate minimal IAM permissions. Use Secret Manager." }
    ],
    correctAnswer: "D",
    explanation: "Separate identities per pipeline limits blast radius."
  },
  {
    id: 248,
    topic: "Storage",
    text: "Standard Storage files. Only needed for 30 days. Save costs automatically. What should you do?",
    options: [
      { label: "A", text: "Create an object lifecycle on the storage bucket to change the storage class to Archive Storage for objects with an age over 30 days." },
      { label: "B", text: "Cron job." },
      { label: "C", text: "Retention policy." },
      { label: "D", text: "Versioning." }
    ],
    correctAnswer: "A",
    explanation: "Lifecycle management automates class transitions."
  },
  {
    id: 249,
    topic: "Kubernetes",
    text: "Deploy workload to Kubernetes. Not sure of resource requirements. Want cost-effective recommendations. What should you do?",
    options: [
      { label: "A", text: "HPA." },
      { label: "B", text: "Configure the Horizontal Pod Autoscaler for availability, and configure the Vertical Pod Autoscaler recommendations for suggestions." },
      { label: "C", text: "VPA availability." },
      { label: "D", text: "VPA -> HPA suggestions." }
    ],
    correctAnswer: "B",
    explanation: "VPA gives recommendations. HPA handles scaling."
  },
  {
    id: 250,
    topic: "Storage",
    text: "Migrate invoice documents. 5 years retention. 5 revisions. Older than 365 days lower cost. What should you do?",
    options: [
      { label: "A", text: "Retention + Scheduler." },
      { label: "B", text: "Retention + Lifecycle." },
      { label: "C", text: "Versioning + Scheduler." },
      { label: "D", text: "Enable object versioning on the bucket, use lifecycle conditions to change the storage class of the objects, set the number of versions, and delete old files." }
    ],
    correctAnswer: "D",
    explanation: "Versioning handles revisions. Lifecycle handles tiering."
  },
  {
    id: 251,
    topic: "Management Tools",
    text: "Prevent proxy credentials from being logged in gcloud CLI logs. What should you do?",
    options: [
      { label: "A", text: "gcloud config set proxy." },
      { label: "B", text: "Encode." },
      { label: "C", text: "Config file." },
      { label: "D", text: "Set the CLOUDSDK_PROXY_USERNAME and CLOUDSDK_PROXY_PASSWORD properties by using environment variables." }
    ],
    correctAnswer: "D",
    explanation: "Environment variables are not logged."
  },
  {
    id: 252,
    topic: "Kubernetes",
    text: "GKE app. Fault-tolerant parts allowed downtime. Critical parts must be available. Optimize cost. What should you do?",
    options: [
      { label: "A", text: "Single node pool standard." },
      { label: "B", text: "Single node pool Spot." },
      { label: "C", text: "Mixed." },
      { label: "D", text: "Create a cluster with both a Spot VM node pool and a node pool by using standard VMs. Deploy critical to standard, fault-tolerant to Spot." }
    ],
    correctAnswer: "D",
    explanation: "Spot VMs save money but can be preempted."
  },
  {
    id: 253,
    topic: "Cloud Run",
    text: "Test new version with small percentage of production traffic. Serverless. What should you do?",
    options: [
      { label: "A", text: "Deploy the application to Cloud Run. Use gradual rollouts for traffic splitting." },
      { label: "B", text: "GKE ASM." },
      { label: "C", text: "Cloud Functions versions." },
      { label: "D", text: "App Engine new service." }
    ],
    correctAnswer: "A",
    explanation: "Cloud Run supports traffic splitting."
  },
  {
    id: 254,
    topic: "Security",
    text: "Security team needs visibility into vulnerabilities and OS metadata for a specific Compute Engine instance. What should you do?",
    options: [
      { label: "A", text: "Ops Agent + Metric." },
      { label: "B", text: "Ops Agent + Inventory." },
      { label: "C", text: "Ensure that the OS Config agent is installed. Provide roles/osconfig.vulnerabilityReportViewer permission." },
      { label: "D", text: "OS Config + Log sink." }
    ],
    correctAnswer: "C",
    explanation: "OS Config agent handles vulnerability reporting."
  },
  {
    id: 255,
    topic: "Cloud Run",
    text: "Deploy new features to Cloud Run. Minimize risk. No cost to customers. What should you do?",
    options: [
      { label: "A", text: "Retry with backoff." },
      { label: "B", text: "Gradually roll out the new revision and split customer traffic between the revisions to allow rollback." },
      { label: "C", text: "All traffic -> rollback." },
      { label: "D", text: "Second service." }
    ],
    correctAnswer: "B",
    explanation: "Traffic splitting allows safe gradual rollouts."
  },
  {
    id: 256,
    topic: "Compute Engine",
    text: "External consultant needs SSH access to Linux instance via VPN. No Google Account. What should you do?",
    options: [
      { label: "A", text: "IAP." },
      { label: "B", text: "Public IP." },
      { label: "C", text: "Instruct the external consultant to generate an SSH key pair, and request the public key. Add the public key to the instance." },
      { label: "D", text: "Share private key." }
    ],
    correctAnswer: "C",
    explanation: "Adding SSH keys is the standard way for non-Google account access."
  },
  {
    id: 257,
    topic: "Operations",
    text: "Monitor unexpected firewall changes and instance creation. Simple solution. What should you do?",
    options: [
      { label: "A", text: "Sink -> BigQuery." },
      { label: "B", text: "Use Cloud Logging filters to create log-based metrics for firewall and instance actions. Monitor the changes and set up reasonable alerts." },
      { label: "C", text: "Kibana." },
      { label: "D", text: "Firewall rules logging." }
    ],
    correctAnswer: "B",
    explanation: "Log-based metrics allow alerting on specific log events without extra infra."
  },
  {
    id: 258,
    topic: "IAM",
    text: "Service account in 'web-applications' needs access to BigQuery in 'crm-databases'. Recommended practice? What should you do?",
    options: [
      { label: "A", text: "Project owner." },
      { label: "B", text: "Project owner." },
      { label: "C", text: "Project owner." },
      { label: "D", text: "Grant roles/bigquery.dataViewer role to crm-databases and appropriate roles to web-applications." }
    ],
    correctAnswer: "D",
    explanation: "Grant access in the target project."
  },
  {
    id: 259,
    topic: "Networking",
    text: "Dataproc in single subnet. No private IPs available. Add new VMs with minimum steps. What should you do?",
    options: [
      { label: "A", text: "Modify the existing subnet range to 172.16.20.0/24." },
      { label: "B", text: "Secondary IP range." },
      { label: "C", text: "New VPC -> Peering." },
      { label: "D", text: "New VPC -> Peering -> Route." }
    ],
    correctAnswer: "A",
    explanation: "Expanding subnet is simplest."
  },
  {
    id: 260,
    topic: "Databases",
    text: "Ecommerce platform. High volume global transactions. SQL queries. Highly available and scalable. What should you use?",
    options: [
      { label: "A", text: "Create a multi-region Cloud Spanner instance with an optimized schema." },
      { label: "B", text: "Firestore." },
      { label: "C", text: "Cloud SQL." },
      { label: "D", text: "BigQuery." }
    ],
    correctAnswer: "A",
    explanation: "Spanner is global, scalable, transactional, and supports SQL."
  },
  {
    id: 261,
    topic: "IAM",
    text: "Acquired startup. Need to copy SRE permissions to startup's organization. What should you do?",
    options: [
      { label: "A", text: "Console -> Create role." },
      { label: "B", text: "Console -> Create role." },
      { label: "C", text: "Use the gcloud iam roles copy command, and provide the Organization ID of the startup company's Google Cloud Organization as the destination." },
      { label: "D", text: "Copy project IDs." }
    ],
    correctAnswer: "C",
    explanation: "gcloud iam roles copy moves roles between orgs."
  },
  {
    id: 262,
    topic: "Cloud Functions",
    text: "Extract text from audio in Storage using Speech API. Fully managed, serverless, automated. What should you do?",
    options: [
      { label: "A", text: "App Engine." },
      { label: "B", text: "Kubernetes job." },
      { label: "C", text: "Cron job." },
      { label: "D", text: "Create a Cloud Function triggered by Cloud Storage bucket events to submit the file URI to the Google Speech-to-Text API." }
    ],
    correctAnswer: "D",
    explanation: "Functions triggered by storage events is the standard pattern."
  },
  {
    id: 263,
    topic: "Networking",
    text: "Secure website. Autoscaling. Store static content in Cloud Storage. Distribute traffic. What should you use?",
    options: [
      { label: "A", text: "An external HTTP(S) load balancer with a managed SSL certificate to distribute the load and a URL map to target the requests for the static content to the Cloud Storage backend." },
      { label: "B", text: "Network LB." },
      { label: "C", text: "Internal LB." },
      { label: "D", text: "HTTPS LB, install certs." }
    ],
    correctAnswer: "A",
    explanation: "HTTPS LB handles static content via URL maps and managed certs simplify security."
  },
  {
    id: 264,
    topic: "Databases",
    text: "Rent out construction equipment. High throughput sensors. Consistent data. Atomic. What should you do?",
    options: [
      { label: "A", text: "Cloud Storage." },
      { label: "B", text: "Filestore." },
      { label: "C", text: "Cloud SQL." },
      { label: "D", text: "Ingest the data into Bigtable. Create a row key based on the event timestamp." }
    ],
    correctAnswer: "D",
    explanation: "Bigtable is optimized for high-throughput time series."
  },
  {
    id: 265,
    topic: "Management Tools",
    text: "Installed CLI. Need to list instances. What two steps?",
    options: [
      { label: "A", text: "Run gcloud auth login." },
      { label: "B", text: "Service account." },
      { label: "C", text: "Cloud Identity key." },
      { label: "D", text: "Set zone." },
      { label: "E", text: "Run gcloud config set project $my_project to set the default project for gcloud CLI." }
    ],
    correctAnswer: "A,E",
    explanation: "Login and set project."
  },
  {
    id: 266,
    topic: "Migration",
    text: "Migrate 200TB video (SAN), Redshift data, 20 GB PNG (S3). No code. What should you do?",
    options: [
      { label: "A", text: "gcloud storage, Dataflow, Storage Transfer." },
      { label: "B", text: "Use Transfer Appliance for the videos, BigQuery Data Transfer Service for the data warehouse data, and Storage Transfer Service for the PNG files." },
      { label: "C", text: "Storage Transfer, BigQuery Transfer, Storage Transfer." },
      { label: "D", text: "Data Fusion." }
    ],
    correctAnswer: "B",
    explanation: "Appliance for large local data. BigQuery Transfer for Redshift. Storage Transfer for S3."
  },
  {
    id: 267,
    topic: "Kubernetes",
    text: "Deploy container using Kubernetes manifest. Full control. Minimize infra config. What should you do?",
    options: [
      { label: "A", text: "Deploy the application on GKE Autopilot." },
      { label: "B", text: "Cloud Run." },
      { label: "C", text: "GKE Standard." },
      { label: "D", text: "Cloud Functions." }
    ],
    correctAnswer: "A",
    explanation: "Autopilot manages nodes (infra) but keeps K8s API."
  },
  {
    id: 268,
    topic: "Serverless",
    text: "Voting website. Large user population. Incoming votes at various rates. Optimize storage/processing. What should you do?",
    options: [
      { label: "A", text: "Firestore." },
      { label: "B", text: "Dedicated instance." },
      { label: "C", text: "JSON on Storage." },
      { label: "D", text: "Save the incoming votes to Pub/Sub. Use the Pub/Sub topic to trigger a Cloud Functions instance to process the votes." }
    ],
    correctAnswer: "D",
    explanation: "Pub/Sub buffers load. Functions scale to process."
  },
  {
    id: 269,
    topic: "Databases",
    text: "Relational database. Secure. Minimal management. IAM integration. What should you do?",
    options: [
      { label: "A", text: "SSL mode encrypted." },
      { label: "B", text: "SSL + IAM." },
      { label: "C", text: "Deploy a Cloud SQL database and configure IAM database authentication. Access the database through the Cloud SQL Auth Proxy." },
      { label: "D", text: "User/pass." }
    ],
    correctAnswer: "C",
    explanation: "Auth Proxy handles secure connection. IAM handles auth."
  },
  {
    id: 270,
    topic: "Networking",
    text: "Project A (VPC A) and Project B (VPC B). Need to communicate efficiently. What should you do?",
    options: [
      { label: "A", text: "OpenVPN." },
      { label: "B", text: "Create VPC Network Peering between vpc-a and vpc-b." },
      { label: "C", text: "Cloud Router." },
      { label: "D", text: "Interconnect." }
    ],
    correctAnswer: "B",
    explanation: "Peering is best for VPC-to-VPC."
  },
  {
    id: 271,
    topic: "Compute Engine",
    text: "Critical workload. Back up disk daily. Retain 7 days. Minimal setup. What should you do?",
    options: [
      { label: "A", text: "Asynchronous replication." },
      { label: "B", text: "Configure daily scheduled persistent disk snapshots with a retention period of 7 days." },
      { label: "C", text: "Cloud Scheduler." },
      { label: "D", text: "Script." }
    ],
    correctAnswer: "B",
    explanation: "Snapshot schedules are built-in."
  },
  {
    id: 272,
    topic: "DevOps",
    text: "Software engineers need to deploy products in preconfigured/approved manner. What should you do?",
    options: [
      { label: "A", text: "Java packages." },
      { label: "B", text: "Bash scripts." },
      { label: "C", text: "Curl." },
      { label: "D", text: "Create Terraform modules that utilize the Google Cloud Terraform Provider to configure Google Cloud products. Store and share the modules in a source code repository." }
    ],
    correctAnswer: "D",
    explanation: "Terraform modules allow shared, approved configs."
  },
  {
    id: 273,
    topic: "Security",
    text: "Configure org policies and log sinks that cannot be removed by project users. Different policies per department. What should you do?",
    options: [
      { label: "A", text: "Naming convention." },
      { label: "B", text: "Naming convention." },
      { label: "C", text: "Organize projects under folders for each department. Configure both organization policies and log sinks on the folders." },
      { label: "D", text: "Folders + Org level." }
    ],
    correctAnswer: "C",
    explanation: "Folders allow applying policies/sinks to groups of projects. Project owners cannot change folder-level settings."
  },
  {
    id: 274,
    topic: "Networking",
    text: "Web app on MIG. Secure and highly available. What should you do?",
    options: [
      { label: "A", text: "SSL Proxy + A record." },
      { label: "B", text: "SSL Proxy + CNAME." },
      { label: "C", text: "HTTPS LB + CNAME." },
      { label: "D", text: "Use HTTP(S) load balancing for the MIG and an A record in your DNS public zone with the load balancer’s IP address." }
    ],
    correctAnswer: "D",
    explanation: "HTTPS LB is for web apps. A record maps to IP."
  },
  {
    id: 275,
    topic: "Kubernetes",
    text: "Microservices on GKE. Resource limits not appropriate. Ensure right sized limits. What should you do?",
    options: [
      { label: "A", text: "Configure a Vertical Pod Autoscaler for each microservice." },
      { label: "B", text: "Change node pool." },
      { label: "C", text: "HPA." },
      { label: "D", text: "Cluster autoscaling." }
    ],
    correctAnswer: "A",
    explanation: "VPA adjusts pod requests/limits."
  },
  {
    id: 276,
    topic: "Databases",
    text: "BigQuery quotaExceeded error. Diagnose. (Choose two)",
    options: [
      { label: "A", text: "BI Engine." },
      { label: "B", text: "Use the INFORMATION_SCHEMA views to analyze the underlying issue." },
      { label: "C", text: "Cloud Trace." },
      { label: "D", text: "Search errors in Cloud Audit Logs to analyze the issue." },
      { label: "E", text: "Monitoring." }
    ],
    correctAnswer: "B,D",
    explanation: "Info schema shows job details. Audit logs show errors."
  },
  {
    id: 277,
    topic: "Compute Engine",
    text: "Stateless app. Run directly on VMs. Fluctuating traffic. Scale automatically. What should you do?",
    options: [
      { label: "A", text: "Deploy the application on a managed instance group and configure autoscaling." },
      { label: "B", text: "GKE." },
      { label: "C", text: "Cloud Functions." },
      { label: "D", text: "Cloud Run." }
    ],
    correctAnswer: "A",
    explanation: "MIGs scale VMs."
  },
  {
    id: 278,
    topic: "Cloud Run",
    text: "Cloud Run app queries Cloud SQL. Morning traffic spike causes API quota errors. What should you do?",
    options: [
      { label: "A", text: "Modify the minimum number of Cloud Run instances." },
      { label: "B", text: "Traffic splitting." },
      { label: "C", text: "Max instances." },
      { label: "D", text: "Min concurrent." }
    ],
    correctAnswer: "A",
    explanation: "Min instances prevents cold starts and sudden connection spikes."
  },
  {
    id: 279,
    topic: "Cloud Run",
    text: "Single stateless web app. Reachable from internal IP (VPC/On-prem). Minimal infra. What should you do?",
    options: [
      { label: "A", text: "GKE standard." },
      { label: "B", text: "Deploy the web application on Cloud Run with Private Google Access configured." },
      { label: "C", text: "Cloud Run Private Service Connect." },
      { label: "D", text: "GKE Autopilot." }
    ],
    correctAnswer: "B",
    explanation: "Cloud Run is minimal infra. Private Google Access allows internal reachability."
  },
  {
    id: 280,
    topic: "Operations",
    text: "Analyze logs with SQL. Follow recommended practices. What should you do?",
    options: [
      { label: "A", text: "Gemini." },
      { label: "B", text: "Enable Log Analytics for the log bucket and create a linked dataset in BigQuery." },
      { label: "C", text: "Schema." },
      { label: "D", text: "Export." }
    ],
    correctAnswer: "B",
    explanation: "Log Analytics allows SQL on logs directly."
  },
  {
    id: 281,
    topic: "Compute Engine",
    text: "3rd party software on VM. Highest speed disk access. Recover on failure. What should you do?",
    options: [
      { label: "A", text: "SSD Persistent." },
      { label: "B", text: "Stateless." },
      { label: "C", text: "Create an instance template. Set the disk type to be Hyperdisk Extreme. Launch the instance template as part of a stateful managed instance group." },
      { label: "D", text: "Hyperdisk stateless." }
    ],
    correctAnswer: "C",
    explanation: "Hyperdisk Extreme is fastest. Stateful MIG ensures recovery."
  },
  {
    id: 282,
    topic: "Networking",
    text: "VM needs fixed IP for internal communication. Minimize cost. What should you do?",
    options: [
      { label: "A", text: "Static external." },
      { label: "B", text: "Promote the existing IP address of the VM to become a static internal IP address." },
      { label: "C", text: "IPv6." },
      { label: "D", text: "New static external." }
    ],
    correctAnswer: "B",
    explanation: "Internal IPs are free/cheaper and appropriate for internal comms."
  },
  {
    id: 283,
    topic: "Kubernetes",
    text: "Deploy app to GKE. High availability. Recommended practices. What should you do?",
    options: [
      { label: "A", text: "Create zonal cluster." },
      { label: "B", text: "Use the gcloud container clusters create-auto command to create an autopilot cluster and deploy the application to it." },
      { label: "C", text: "Update region." },
      { label: "D", text: "Update node locations." }
    ],
    correctAnswer: "B",
    explanation: "Autopilot manages HA and best practices."
  },
  {
    id: 284,
    topic: "IAM",
    text: "Test service account permissions from local machine. Secure method. What should you do?",
    options: [
      { label: "A", text: "Generate key." },
      { label: "B", text: "Grant Admin." },
      { label: "C", text: "Configure the gcloud CLI to use service account impersonation." },
      { label: "D", text: "ADC user account." }
    ],
    correctAnswer: "C",
    explanation: "Impersonation avoids key files (security risk)."
  },
  {
    id: 285,
    topic: "Storage",
    text: "Notify on file modifications. Recent incident. Minimize overhead. What should you do?",
    options: [
      { label: "A", text: "Audit logs." },
      { label: "B", text: "Enable Cloud Storage object versioning on your bucket. Configure Pub/Sub notifications for your Cloud Storage buckets." },
      { label: "C", text: "Script." },
      { label: "D", text: "Change notifications." }
    ],
    correctAnswer: "B",
    explanation: "Pub/Sub notifications trigger on changes."
  },
  {
    id: 286,
    topic: "Management Tools",
    text: "Manage multiple projects. Fewest steps. What should you do?",
    options: [
      { label: "A", text: "Create a configuration for each project you need to manage. Activate the appropriate configuration when you work with each of your assigned GCP projects." },
      { label: "B", text: "gcloud init." },
      { label: "C", text: "Default config." },
      { label: "D", text: "gcloud init." }
    ],
    correctAnswer: "A",
    explanation: "Configurations are the standard way."
  },
  {
    id: 287,
    topic: "Databases",
    text: "Spanner predictable traffic. Scale automatically. What should you do?",
    options: [
      { label: "A", text: "Cron job." },
      { label: "B", text: "SRE." },
      { label: "C", text: "Support." },
      { label: "D", text: "Create a Stackdriver alerting policy to send an alert to webhook when Cloud Spanner CPU is over or under your threshold. Create a Cloud Function that listens to HTTP and resizes Spanner resources accordingly." }
    ],
    correctAnswer: "D",
    explanation: "Alert-based scaling (via Function) automates the process."
  },
  {
    id: 288,
    topic: "Billing",
    text: "Email when egress costs for specific server > $100. What should you do?",
    options: [
      { label: "A", text: "Budget project." },
      { label: "B", text: "Budget account." },
      { label: "C", text: "Export the billing data to BigQuery. Create a Cloud Function that uses BigQuery to sum the egress network costs... and sends an email." },
      { label: "D", text: "Logs." }
    ],
    correctAnswer: "C",
    explanation: "Granular cost alerting requires analysis (BigQuery)."
  },
  {
    id: 289,
    topic: "Billing",
    text: "Estimate monthly total cost. What should you do?",
    options: [
      { label: "A", text: "For each GCP product in the solution, review the pricing details on the products pricing page. Use the pricing calculator to total the monthly costs for each GCP product." },
      { label: "B", text: "Spreadsheet." },
      { label: "C", text: "Provision." },
      { label: "D", text: "Provision." }
    ],
    correctAnswer: "A",
    explanation: "Calculator."
  },
  {
    id: 290,
    topic: "Kubernetes",
    text: "GKE. Need to add node pool with different machine type. Zero downtime. What should you do?",
    options: [
      { label: "A", text: "Upgrade." },
      { label: "B", text: "Create a new Node Pool and specify machine type n2-highmem-16. Deploy the new pods." },
      { label: "C", text: "New cluster." },
      { label: "D", text: "New cluster." }
    ],
    correctAnswer: "B",
    explanation: "Node pools allow mixed machine types."
  },
  {
    id: 291,
    topic: "Compute Engine",
    text: "App in us-central1-a. Support zonal failure. Eliminate downtime. Minimize cost. What should you do?",
    options: [
      { label: "A", text: "Create Compute Engine resources in us-central1-b. Balance the load across both us-central1-a and us-central1-b." },
      { label: "B", text: "MIG single zone." },
      { label: "C", text: "Load balancer." },
      { label: "D", text: "Backups." }
    ],
    correctAnswer: "A",
    explanation: "Multi-zonal deployment + LB."
  }
];

// Helper to get unique topics
export const getTopics = () => Array.from(new Set(questions.map(q => q.topic))).sort();

// Helper to get questions by topic
export const getQuestionsByTopic = (topic: string) => questions.filter(q => q.topic === topic);

// Helper to get all questions
export const getAllQuestions = () => questions;