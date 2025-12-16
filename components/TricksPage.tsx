import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';

interface TrickSection {
  title: string;
  icon: string;
  tricks: {
    category: string;
    items: string[];
  }[];
}

const tricksData: TrickSection[] = [
  {
    title: ' NETWORKING (VPC, Subnet, LB, Firewall)',
    icon: '🌐',
    tricks: [
      {
        category: 'VPC',
        items: [
          'VPC ≠ region ≠ zone → GLOBAL',
          'VPC is the container for all networking resources'
        ]
      },
      {
        category: 'Subnet',
        items: [
          'Subnet = REGIONAL (lives in one region)',
          'Subnet = State, VPC = Country'
        ]
      },
      {
        category: 'IP Ranges',
        items: [
          'Biggest private range → 10.0.0.0/8',
          'Smaller number = bigger network (/8 = BIG BOSS)'
        ]
      },
      {
        category: 'Firewall',
        items: [
          'Firewall rules are VPC-level (not subnet-level)',
          'Control INGRESS / EGRESS using tags or service accounts'
        ]
      },
      {
        category: 'Load Balancer',
        items: [
          'Public HTTPS app → Global External HTTPS LB',
          'SSL termination happens AT the Load Balancer',
          'Internal traffic → Internal LB'
        ]
      },
      {
        category: 'Ingress / Egress',
        items: [
          'Ingress = traffic coming IN (free)',
          'Egress = traffic going OUT (EXPENSIVE - billed!)'
        ]
      }
    ]
  },
  {
    title: ' COMPUTE ENGINE',
    icon: '🖥️',
    tricks: [
      {
        category: 'Managed Instance Group (MIG)',
        items: [
          'Autoscaling + Autohealing + Rolling updates = MIG',
          'Use MIG when you need orchestration across VMs'
        ]
      },
      {
        category: 'Autohealing',
        items: [
          'Requires health check to work',
          'Recreates unhealthy VMs automatically',
          'No health check = no autohealing!'
        ]
      },
      {
        category: 'OS Login',
        items: [
          'Uses Google accounts (not project-level SSH keys)',
          'Roles: compute.osLogin, compute.osAdminLogin',
          'Better audit trail + SSH security'
        ]
      },
      {
        category: 'Instance Scheduling',
        items: [
          'Use instance schedule for periodic workloads (cost savings)',
          'Cheaper than always-on VMs for batch jobs'
        ]
      }
    ]
  },
  {
    title: ' GKE (KUBERNETES ENGINE)',
    icon: '☸️',
    tricks: [
      {
        category: 'When to Choose GKE',
        items: [
          'Microservices architecture',
          'Containers to manage',
          'Portability across clouds',
          'Need pod-level autoscaling'
        ]
      },
      {
        category: 'GKE vs Compute Engine',
        items: [
          'Single binary → Compute Engine',
          'Containers + orchestration → GKE',
          'Autoscale pods → GKE',
          'Full VM control → Compute Engine'
        ]
      },
      {
        category: 'Cost Optimization',
        items: [
          'Use Autopilot mode for hands-off management',
          'Use Standard mode for fine-grained control',
          'Preemptible nodes = 70% cheaper but can be evicted'
        ]
      }
    ]
  },
  {
    title: ' CLOUD STORAGE',
    icon: '📦',
    tricks: [
      {
        category: 'Storage Classes',
        items: [
          'Standard = Frequent access',
          'Nearline = < once per month',
          'Coldline = < once per quarter',
          'Archive = < once per year',
          'Remember: NCA = Monthly → Quarterly → Yearly'
        ]
      },
      {
        category: 'Buckets',
        items: [
          'Bucket name = GLOBALLY UNIQUE',
          'Objects stored inside buckets',
          'Lifecycle rules auto-move/delete objects'
        ]
      },
      {
        category: 'Secure Sharing',
        items: [
          'Temporary access → Signed URL',
          'No Google account needed → Signed URL',
          'Temporary + external user = Signed URL answer'
        ]
      },
      {
        category: 'Lifecycle Rules',
        items: [
          'Move objects to cheaper storage based on age',
          'Delete objects automatically after X days',
          'Combines with storage classes for cost optimization'
        ]
      },
      {
        category: 'Fast Upload',
        items: [
          'Large file + WAN → gsutil -m cp',
          'Speed = -m flag (parallel upload)',
          'Faster than sequential upload for multi-GB files'
        ]
      }
    ]
  },
  {
    title: ' DATABASES (CRITICAL)',
    icon: '🗄️',
    tricks: [
      {
        category: 'Cloud SQL',
        items: [
          'MySQL / PostgreSQL / SQL Server',
          'Single region (not global)',
          'Small to medium workloads',
          'Point-in-time recovery via binary logging',
          'Traditional DB = Cloud SQL'
        ]
      },
      {
        category: 'Cloud Spanner',
        items: [
          'Global + horizontally scalable',
          'Strong consistency (not eventual)',
          'VERY expensive (only use if truly needed)',
          'If question mentions "global + scale + money" = Spanner'
        ]
      },
      {
        category: 'Bigtable',
        items: [
          'NoSQL, optimized for time-series data',
          'Massive scale, millisecond latency',
          'Use for IoT, telemetry, analytics',
          'Time-series = Bigtable (common exam trick!)'
        ]
      },
      {
        category: 'Firestore',
        items: [
          'Managed NoSQL for real-time apps',
          'Better than Datastore (use Firestore)',
          'Good for mobile apps, real-time sync',
          'Global by default'
        ]
      },
      {
        category: 'BigQuery',
        items: [
          'Analytics + SQL on massive datasets',
          'Pay per BYTES READ (not per query!)',
          'Partitioning + clustering = lower costs',
          'Cost = BYTES READ (common trick!)'
        ]
      },
      {
        category: 'Database Selection Rule',
        items: [
          'Need SQL + transactions → Cloud SQL or Spanner',
          'NoSQL + scale → Bigtable or Firestore',
          'Analytics + BigData → BigQuery',
          'Real-time apps → Firestore'
        ]
      }
    ]
  },
  {
    title: ' DATA PIPELINE',
    icon: '📡',
    tricks: [
      {
        category: 'Time-Series Pipeline',
        items: [
          'Pub/Sub → Dataflow → Bigtable → BigQuery',
          'Stream → process → store → analyze',
          'Pub/Sub for real-time ingestion',
          'Dataflow for transformations'
        ]
      },
      {
        category: 'Batch vs Stream',
        items: [
          'Batch (nightly): Dataflow batch jobs',
          'Stream (real-time): Pub/Sub + Dataflow streaming',
          'Choose based on latency requirements'
        ]
      }
    ]
  },
  {
    title: ' APP ENGINE',
    icon: '🚀',
    tricks: [
      {
        category: 'Scaling Types',
        items: [
          'Automatic = Web apps (default)',
          'Basic = Short jobs < 24 hours',
          'Manual = Fixed instances (you control)',
          'If "web app that scales" → Automatic'
        ]
      },
      {
        category: 'Cold Starts',
        items: [
          'min_idle_instances = keeps instances warm',
          'Avoids cold start delays',
          'Costs more but faster response',
          'Use for latency-sensitive apps'
        ]
      },
      {
        category: 'App Engine vs Cloud Run',
        items: [
          'App Engine = managed platform (more opinionated)',
          'Cloud Run = containerized functions',
          'If Python/Node/Go + simple → App Engine',
          'If Docker container + event-driven → Cloud Run'
        ]
      }
    ]
  },
  {
    title: ' CLOUD RUN',
    icon: '☁️',
    tricks: [
      {
        category: 'Cloud Run',
        items: [
          'Serverless containers (run anything in a container)',
          'Pay only when container is executing',
          'Auto-scales from 0 to N (truly serverless)',
          'Good for APIs, webhooks, scheduled jobs'
        ]
      },
      {
        category: 'Cloud Run vs Cloud Functions',
        items: [
          'Run = containers (any language, any dependencies)',
          'Functions = code snippets (limited runtimes)',
          'If "need Docker" → Cloud Run',
          'If "simple function" → Cloud Functions'
        ]
      }
    ]
  },
  {
    title: ' CLOUD FUNCTIONS',
    icon: '🐍',
    tricks: [
      {
        category: 'Cloud Functions',
        items: [
          'Serverless functions (Node, Python, Go, etc)',
          'Event-driven (Pub/Sub, Storage, HTTP)',
          'Pay per invocation (not per second)',
          'Max runtime: 540 seconds (9 minutes)'
        ]
      },
      {
        category: 'Triggers',
        items: [
          'HTTP = REST endpoints',
          'Pub/Sub = message-driven',
          'Cloud Storage = file events',
          'Firestore = database events',
          'Cloud Tasks = scheduled/queued tasks'
        ]
      }
    ]
  },
  {
    title: ' IAM (CRITICAL)',
    icon: '🔐',
    tricks: [
      {
        category: 'Core Rules',
        items: [
          'Use GROUPS, not individuals (scalable)',
          'Use PREDEFINED roles, not custom (unless explicitly asked)',
          'Group + predefined = standard exam answer'
        ]
      },
      {
        category: 'Common Roles',
        items: [
          'Upload objects → storage.objectCreator',
          'Manage buckets → storage.admin',
          'Deploy App Engine → appengine.deployer',
          'Read logs → logging.viewer',
          'Create resources → editor / owner'
        ]
      },
      {
        category: 'Service Accounts',
        items: [
          'Use service accounts for applications (not Google accounts)',
          'Grant roles to service accounts via IAM',
          'Use Workload Identity on GKE (no key management)'
        ]
      }
    ]
  },
  {
    title: ' LOGGING & MONITORING',
    icon: '📊',
    tricks: [
      {
        category: 'Logs',
        items: [
          'Audit logs = WHO DID WHAT',
          'Cloud Logging ≠ Activity log',
          'Data access logs = detailed audit trail',
          'Who did what = Logging (common exam answer)'
        ]
      },
      {
        category: 'Monitoring',
        items: [
          'Multi-project → Single Monitoring account + link projects',
          'Create metrics + dashboards',
          'Set up alert policies',
          'Many projects, one view'
        ]
      },
      {
        category: 'Error Reporting',
        items: [
          'Automatically collects errors from App Engine, GKE, etc',
          'Aggregates duplicate errors',
          'Sends notifications'
        ]
      }
    ]
  },
  {
    title: ' BILLING',
    icon: '💰',
    tricks: [
      {
        category: 'Billing Setup',
        items: [
          'Central billing account = organize all projects',
          'Link projects to billing account',
          'Billing alerts = prevent surprise charges'
        ]
      },
      {
        category: 'Cost Analysis',
        items: [
          'Export to BigQuery = custom cost analysis',
          'Money questions → BigQuery answer',
          'Identify high-cost resources'
        ]
      },
      {
        category: 'Cost Optimization',
        items: [
          'Preemptible VMs = 70% cheaper',
          'Committed discounts = reserved capacity',
          'Storage classes = cheaper cold storage',
          'Egress = most expensive (minimize!)'
        ]
      }
    ]
  },
  {
    title: ' OPERATIONS & OBSERVABILITY',
    icon: '🔍',
    tricks: [
      {
        category: 'Stackdriver Overview',
        items: [
          'Stackdriver = logging + monitoring + diagnostics',
          'Now called Cloud Logging, Cloud Monitoring, Cloud Trace'
        ]
      },
      {
        category: 'Cloud Logging',
        items: [
          'Collects logs from all GCP resources',
          'Admin Activity = free (always logged)',
          'Data Access = can be enabled (costs extra)',
          'System Events = resource level events',
          'Export to Cloud Storage, BigQuery, Pub/Sub'
        ]
      },
      {
        category: 'Cloud Monitoring',
        items: [
          'Metrics + dashboards + alerting',
          'Multi-project monitoring dashboard',
          'Alert policies trigger on threshold breach',
          'Custom metrics via API'
        ]
      },
      {
        category: 'Cloud Trace',
        items: [
          'Distributed tracing across microservices',
          'Track requests from end-to-end',
          'Identify latency bottlenecks',
          'Works with App Engine, GKE, Cloud Functions'
        ]
      },
      {
        category: 'Cloud Profiler',
        items: [
          'CPU and memory profiling',
          'Low-overhead continuous profiling',
          'Identify resource hogs'
        ]
      },
      {
        category: 'Error Reporting (OPS)',
        items: [
          'Automatic error detection',
          'Groups similar errors',
          'Notifications on new errors',
          'Works with App Engine, GKE, Cloud Functions, Cloud Run'
        ]
      }
    ]
  },
  {
    title: ' ARTIFACT REGISTRY & CONTAINERS',
    icon: '📦',
    tricks: [
      {
        category: 'Artifact Registry',
        items: [
          'Container registry replacement (use this, not deprecated GCR)',
          'Store Docker images, JAR, Python packages',
          'Regional or multi-region storage',
          'Cleaner naming: region-docker.pkg.dev/project/repo/image'
        ]
      },
      {
        category: 'Cloud Run',
        items: [
          'Deploy containers instantly (fully managed)',
          'Scales to 0 (truly serverless)',
          'Auto-scales based on traffic',
          'Pay only while executing',
          'Port must listen on $PORT env var'
        ]
      },
      {
        category: 'Cloud Run vs App Engine',
        items: [
          'Cloud Run = any container, any language, event-driven',
          'App Engine = managed platform (more opinionated)',
          'Cloud Run = maximum flexibility',
          'App Engine = simpler for simple apps'
        ]
      }
    ]
  },
  {
    title: ' SECURITY & SERVICE ACCOUNTS',
    icon: '🔒',
    tricks: [
      {
        category: 'Service Accounts',
        items: [
          'Use for applications, not people',
          'Create keys for external apps (keep secure!)',
          'Use Workload Identity on GKE instead of keys (better!)',
          'Service account has email: name@project.iam.gserviceaccount.com'
        ]
      },
      {
        category: 'IAM Best Practices',
        items: [
          'Grant roles to Google Groups (not individuals)',
          'Use predefined roles when possible (not custom)',
          'Principle of least privilege (give minimum access)',
          'Use service accounts for apps'
        ]
      },
      {
        category: 'Secret Manager',
        items: [
          'Store secrets securely (DB passwords, API keys)',
          'Fine-grained access control',
          'Audit trail for secret access',
          'Automatic secret rotation capability'
        ]
      },
      {
        category: 'VPC Service Controls',
        items: [
          'Create security perimeter around resources',
          'Control data access in/out of perimeter',
          'Prevent data exfiltration'
        ]
      }
    ]
  },
  {
    title: ' CONNECTIVITY',
    icon: '🔗',
    tricks: [
      {
        category: 'Cloud VPN',
        items: [
          'Connect on-prem to GCP securely',
          'Traffic encrypted through internet',
          'Lower bandwidth, lower cost',
          'Higher latency (goes through internet)'
        ]
      },
      {
        category: 'Cloud Interconnect',
        items: [
          'Direct physical connection to Google',
          'Dedicated lines (Dedicated or Partner Interconnect)',
          'Higher bandwidth, lower latency',
          'Higher cost but predictable performance',
          'If question mentions "dedicated link" → Interconnect'
        ]
      },
      {
        category: 'VPN vs Interconnect Decision',
        items: [
          'Low bandwidth, cost-sensitive → VPN',
          'High bandwidth, low latency needed → Interconnect',
          'VPN first, then scale to Interconnect if needed'
        ]
      }
    ]
  },
  {
    title: ' CI/CD & DEPLOYMENT',
    icon: '🚀',
    tricks: [
      {
        category: 'Cloud Build',
        items: [
          'Build, test, deploy automatically',
          'Triggered by git commits',
          'Runs in containers (highly customizable)',
          'Outputs to Artifact Registry',
          'Works with GitHub, GitLab, Cloud Source Repos'
        ]
      },
      {
        category: 'Deployment Manager',
        items: [
          'Infrastructure as Code (IaC) using YAML/Jinja2',
          'Declarative resource templates',
          'Version control your infrastructure',
          'Good for repeatable deployments'
        ]
      },
      {
        category: 'Cloud Source Repositories',
        items: [
          'Fully-managed git hosting (like GitHub)',
          'Private repos, same auth as GCP',
          'Integrated with Cloud Build'
        ]
      }
    ]
  },
  {
    title: ' BACKUP & DISASTER RECOVERY',
    icon: '💾',
    tricks: [
      {
        category: 'Snapshots',
        items: [
          'Point-in-time copy of disk (persistent disk or boot disk)',
          'Create from running VM (no downtime)',
          'Use snapshots to create new disks',
          'Scheduled snapshots for automated backups',
          'Can clone disk across regions'
        ]
      },
      {
        category: 'Cloud SQL Backups',
        items: [
          'Automatic daily backups',
          'Point-in-time recovery via binary logging',
          'Manual backups on-demand',
          'Cross-region backup for DR'
        ]
      },
      {
        category: 'Backup & Disaster Recovery',
        items: [
          'Use snapshots for VMs + disks',
          'Use Cloud SQL point-in-time recovery',
          'Use GCS lifecycle policies for data retention',
          'Test recovery regularly (exam may ask!)'
        ]
      }
    ]
  },
  {
    title: ' LOCATION BASICS',
    icon: '🌍',
    tricks: [
      {
        category: 'Geography Hierarchy',
        items: [
          'Region = geographic area (us-central1)',
          'Zone = data center within region (us-central1-a)',
          'Location = combination of region/zone',
          'Multi-region = global service'
        ]
      },
      {
        category: 'Regional vs Zonal Resources',
        items: [
          'VPC = GLOBAL',
          'Subnet = REGIONAL (lives in one region, spans zones)',
          'Compute Engine VM = ZONAL (lives in one zone)',
          'Persistent disk = ZONAL (but can snapshot/copy to other zones)',
          'Cloud Storage bucket = global (but data stored in region you specify)'
        ]
      },
      {
        category: 'Multi-Zone Deployment',
        items: [
          'Managed Instance Group (MIG) spans multiple zones in region',
          'VMs in different zones still talk via private subnet IPs',
          'If zone dies, MIG recreates VM in other zone (with autohealing)'
        ]
      }
    ]
  },
  {
    title: ' EXAM RED FLAGS & DECISION TREES',
    icon: '🎯',
    tricks: [
      {
        category: 'Decision Trees',
        items: [
          'If "fewest steps" → Marketplace / managed service',
          'If "Google recommended" → managed + predefined roles',
          'If "global + scale + consistency" → Spanner',
          'If "time series" → Bigtable',
          'If "temporary access" → Signed URL',
          'If "large file fast upload" → gsutil -m',
          'If "web app autoscale" → App Engine Automatic',
          'If "containers + scale" → GKE',
          'If "analytics + BigData" → BigQuery',
          'If "dedicated network link" → Interconnect',
          'If "event-driven serverless" → Cloud Functions or Cloud Run'
        ]
      },
      {
        category: 'Red Flag Trap Answers',
        items: [
          'Manual health checks → WRONG (use autohealing)',
          'Cloud SQL for global scale → WRONG (use Spanner)',
          'Custom IAM when predefined exists → WRONG',
          'Firestore for historical analytics → WRONG (use BigQuery)',
          'Ignoring egress costs → LIKELY WRONG',
          'Manual certificate management → WRONG (use managed SSL)',
          'Always-on instances for bursty workloads → WRONG (use autoscaling)',
          'Creating custom roles for basic access → WRONG (use predefined)'
        ]
      },
      {
        category: 'Watch for These Words',
        items: [
          '"Fewest steps" → look for managed/automated solution',
          '"Global" + "scale" + "consistency" → Spanner (not SQL)',
          '"Temporary" + "no auth" → Signed URL',
          '"Large file" + "slow" → gsutil -m (parallel upload)',
          '"High availability" + "autoscale" → MIG with health checks',
          '"Event-driven" + "serverless" → Cloud Functions or Cloud Run',
          '"Infrastructure as code" → Deployment Manager or Terraform'
        ]
      }
    ]
  },
  {
    title: ' OPERATIONS / OBSERVABILITY',
    icon: '📊',
    tricks: [
      {
        category: 'Stackdriver = Cloud Operations',
        items: [
          'Stackdriver ≈ Logging + Monitoring + Error Reporting + Trace',
          'Stackdriver is the OLD NAME (now called Cloud Operations)',
          'Single pane of glass for all observability'
        ]
      },
      {
        category: 'OPS AGENT (VERY IMPORTANT!!!)',
        items: [
          'OPS Agent = SINGLE agent for logs + metrics collection (replaces Monitoring + Logging agents)',
          'OPS Agent = lighter + more flexible + recommended',
          'Runs INSIDE the VM (needs to be installed)',
          'Collects application + system + custom metrics',
          'Question: "collect metrics + logs from VM" → Answer: OPS Agent'
        ]
      },
      {
        category: 'Cloud Logging (formerly Stackdriver Logging)',
        items: [
          'Centralized log management across GCP projects',
          'Log types: Admin Activity, System Event, Data Access',
          'Admin logs = WHO DID WHAT (authorization, resource creation)',
          'Query logs with Log Explorer or Logging API',
          'Export logs to BigQuery / Cloud Storage for long-term retention',
          '"Who accessed resource?" → Admin Activity logs'
        ]
      },
      {
        category: 'Cloud Monitoring (formerly Stackdriver Monitoring)',
        items: [
          'Metrics collection + dashboards + alerting',
          'Pre-built metrics for compute, networking, databases',
          'Custom metrics can be pushed via Monitoring API',
          'Multi-project dashboard = link projects to central monitoring workspace',
          'Uptime checks = synthetic monitoring (external + internal)'
        ]
      },
      {
        category: 'Error Reporting',
        items: [
          'Automatic error collection from App Engine, Cloud Run, GKE',
          'Groups similar errors together',
          'Sends alerts when new error patterns detected',
          'Free service (included in Cloud Operations)'
        ]
      },
      {
        category: 'Cloud Trace',
        items: [
          'Distributed tracing across services',
          'Understand latency + dependencies between services',
          'Traces requests across microservices',
          'Requires instrumentation (OpenTelemetry)',
          'Cloud Run + GKE + App Engine integration'
        ]
      },
      {
        category: 'Alerting Policies',
        items: [
          'Notification channels = Email / SMS / PagerDuty / Slack',
          'Alert if metric exceeds threshold',
          'Multiple conditions = AND / OR logic',
          'Incident created = requires manual closure or auto-close'
        ]
      },
      {
        category: 'Multi-Project Monitoring',
        items: [
          'Central monitoring account + link other projects',
          'Single dashboard = view all projects',
          'Metrics Scopes = organize linked projects',
          'Question: "Monitor multiple projects from one place" → Link to central Monitoring'
        ]
      },
      {
        category: 'Log Retention',
        items: [
          'Default = 30 days in Logging console',
          'Export to BigQuery / Cloud Storage for longer retention',
          'Cloud Storage + Lifecycle rules = archive old logs (cost savings)',
          'Compliance requirements → export + archive strategy'
        ]
      },
      {
        category: 'Audit Logs Types',
        items: [
          'Admin Activity = metadata operations (create/delete/modify resources)',
          'Data Access = read operations on customer data (disabled by default)',
          'System Events = GCP internal actions',
          'Enable data access logs for compliance audits'
        ]
      }
    ]
  },
  {
    title: ' ARTIFACT REGISTRY & IMAGES',
    icon: '📦',
    tricks: [
      {
        category: 'Artifact Registry',
        items: [
          'Central repository for Docker images, Maven, npm, Python packages',
          'Replaces Container Registry (deprecated)',
          'Integrates with Cloud Build for automated builds',
          'Fine-grained access control via IAM roles',
          'Supports private repositories (isolated within project)'
        ]
      },
      {
        category: 'Container Security',
        items: [
          'Vulnerability scanning = detect known vulnerabilities in images',
          'Binary Authorization = only allow signed images to run',
          'Image signing = create provenance records',
          'Scanning runs on push or on-demand'
        ]
      }
    ]
  },
  {
    title: ' CONTAINERS & CLOUD RUN DEEP DIVE',
    icon: '🐳',
    tricks: [
      {
        category: 'Cloud Run Essentials',
        items: [
          'Serverless container platform = pay for requests only',
          'Automatically scales 0 to N instances',
          'Stateless containers (no persistent storage)',
          'HTTP request triggers (synchronous)',
          'Uses Cloud Run service accounts for permissions'
        ]
      },
      {
        category: 'Cloud Run vs Cloud Functions',
        items: [
          'Cloud Run = any custom container + any language',
          'Cloud Functions = lightweight functions (Node/Python/Go)',
          'Run = 15-60 minute timeout, Functions = 9 minute max',
          'Run = better for microservices, Functions = quick scripts'
        ]
      },
      {
        category: 'Cloud Run Deployment',
        items: [
          'Deploy from artifact registry / container registry / local image',
          'Set environment variables at deployment',
          'Configure memory (128MB - 8GB) + CPU (0.08 - 4 vCPU)',
          'Use Cloud Build for CI/CD integration'
        ]
      }
    ]
  },
  {
    title: ' SECURITY & IDENTITY',
    icon: '🔒',
    tricks: [
      {
        category: 'Service Accounts Deep Dive',
        items: [
          'Service account = identity for apps + services',
          'Email format: name@project.iam.gserviceaccount.com',
          'Grant roles via IAM (never use keys if avoidable)',
          'Key rotation = manual (or use Workload Identity on GKE)',
          'Question: "App on VM needs access to Cloud Storage" → Create + use service account'
        ]
      },
      {
        category: 'IAM Roles',
        items: [
          'Basic roles = Owner / Editor / Viewer (project-level, not recommended)',
          'Predefined roles = role/compute.admin, storage.admin, etc',
          'Custom roles = define custom permissions (only if predefined insufficient)',
          'Binding = member + role at resource level (least privilege)'
        ]
      },
      {
        category: 'Secret Manager',
        items: [
          'Secure storage for API keys + database passwords + certificates',
          'Automatic rotation support (if using Secret Manager)',
          'Audit logging = who accessed secret + when',
          'IAM-based access control'
        ]
      },
      {
        category: 'VPC Service Controls',
        items: [
          'Create security perimeter around GCP resources',
          'Control data egress from perimeter',
          'Requires specific service + resource configuration',
          'Advanced security feature (exam less common)'
        ]
      }
    ]
  },
  {
    title: ' CONNECTIVITY & NETWORKING ADVANCED',
    icon: '🔗',
    tricks: [
      {
        category: 'Cloud VPN',
        items: [
          'IPsec VPN tunnel between on-prem + GCP',
          'Encrypted connection over public internet',
          'Lower throughput than Interconnect',
          'Faster to set up (minutes vs weeks for Interconnect)'
        ]
      },
      {
        category: 'Cloud Interconnect',
        items: [
          'Direct physical connection to Google infrastructure',
          'Dedicated circuit (expensive but reliable)',
          '3-10 Gbps throughput',
          'Lower latency + consistent performance vs VPN'
        ]
      },
      {
        category: 'Peering vs Interconnect vs VPN',
        items: [
          'VPN = quickest on-prem to GCP connection',
          'Interconnect = fastest + most reliable on-prem connection',
          'VPC Peering = connect two VPC networks (within Google)',
          'Question: "Fastest on-prem to GCP" → Interconnect'
        ]
      }
    ]
  },
  {
    title: ' CI/CD & DEPLOYMENT',
    icon: '🚀',
    tricks: [
      {
        category: 'Cloud Build',
        items: [
          'Serverless CI/CD platform',
          'Build triggers from GitHub / GitHub Enterprise / Cloud Source Repos',
          'cloudbuild.yaml = define build steps (gcloud, docker, custom)',
          'Integrates with Artifact Registry for image storage',
          'Pay per build minute (not per runner)'
        ]
      },
      {
        category: 'Build Triggers',
        items: [
          'Push to branch → automatically trigger build',
          'PR created → run tests before merge (approval gates)',
          'Tag creation → deploy new version',
          'Custom substitutions = parameterize builds'
        ]
      },
      {
        category: 'Deployment Manager',
        items: [
          'Infrastructure as Code (IaC) using YAML + Jinja templates',
          'Deploy entire infrastructure (VMs, networks, disks, etc)',
          'Template reusability + version control',
          'Useful for repeatable deployments'
        ]
      }
    ]
  },
  {
    title: ' BACKUP & DISASTER RECOVERY',
    icon: '💾',
    tricks: [
      {
        category: 'Snapshots',
        items: [
          'Point-in-time copy of persistent disk',
          'Incremental = only changed blocks (first = full, subsequent = delta)',
          'Can create disk from snapshot in different zone/region',
          'Used for backups + cloning disks'
        ]
      },
      {
        category: 'Backup & Disaster Recovery Service',
        items: [
          'Centralized backup management for VMs + databases',
          'Automated backup schedules',
          'Point-in-time recovery',
          'Cross-region/zone restore for DR'
        ]
      },
      {
        category: 'Cloud SQL Backups',
        items: [
          'Automated daily backups (configurable retention)',
          'On-demand backups for critical operations',
          'Restore to new instance or in-place',
          'Binary logs = point-in-time recovery'
        ]
      }
    ]
  },
  {
    title: ' LOCATION BASICS (REFERENCE TABLE)',
    icon: '🗺️',
    tricks: [
      {
        category: 'Geographic Hierarchy',
        items: [
          'GLOBAL = VPC / Load Balancer / Cloud Storage buckets',
          'REGION = Compute Engine zone, Cloud SQL instance, Cloud Run',
          'ZONE = individual Compute Engine VM, instance groups',
          'Multi-REGION = BigQuery datasets, Cloud Firestore, Cloud Storage (dual-region)'
        ]
      },
      {
        category: 'Latency Optimization',
        items: [
          'Place resources close to users = lower latency',
          'Use multi-region for disaster recovery',
          'Cloud CDN = cache at edge for faster delivery',
          'Regional resources = replicable for DR'
        ]
      }
    ]
  },
  {
    title: ' MEMORY MAP - QUICK REFERENCE',
    icon: '📋',
    tricks: [
      {
        category: 'Choose Service Decision Tree',
        items: [
          'Long-running app (days/weeks)? → Compute Engine VM',
          'Containerized app (hours)? → Cloud Run / GKE',
          'Batch job (minutes)? → Cloud Run / App Engine',
          'Scheduled job? → Cloud Scheduler → Cloud Run / Cloud Functions',
          'Need orchestration? → Cloud Workflows / Dataflow',
          'Data processing at scale? → BigQuery / Dataflow / Pub/Sub'
        ]
      },
      {
        category: 'Database Cheat Sheet',
        items: [
          'SQL + ACID + Global scale? → Cloud Spanner',
          'SQL + Regional? → Cloud SQL',
          'NoSQL + time series? → Bigtable',
          'NoSQL + mobile/web? → Firestore',
          'Data warehouse analytics? → BigQuery',
          'Cache layer? → Cloud Memorystore (Redis)'
        ]
      },
      {
        category: 'Networking Decision Tree',
        items: [
          'Need private connectivity? → Cloud VPN (quick) or Interconnect (fast)',
          'Need to expose externally? → Global External LB + Cloud Armor',
          'Internal services? → Internal LB',
          'Need to restrict egress? → VPC Service Controls',
          'DNS? → Cloud DNS'
        ]
      }
    ]
  },
  {
    title: ' EXAM RED FLAG WORDS & ANSWERS',
    icon: '🚩',
    tricks: [
      {
        category: 'Red Flag Keywords & What They Mean',
        items: [
          '"managed" / "serverless" / "automatic" → Google handles infrastructure',
          '"containers at scale" → GKE or Cloud Run',
          '"analytics on historical data" → BigQuery',
          '"time-series data" → Bigtable',
          '"configure once, run recurring" → Cloud Scheduler',
          '"stream data in real-time" → Pub/Sub or Dataflow',
          '"lowest cost + autoscale" → Preemptible VMs or Cloud Run'
        ]
      },
      {
        category: 'Trap Answers (Eliminate These)',
        items: [
          'Custom roles when predefined exists → WRONG',
          'Cloud SQL for global scale → WRONG (use Spanner)',
          'Manual health checks for autohealing → WRONG (health check is required but automatic)',
          '"Save to Cloud SQL for analytics" → WRONG (export to BigQuery)',
          '"Use SSH key pairs on all VMs" → WRONG (use OS Login + service accounts)',
          '"Firestore for historical analytics" → WRONG (use BigQuery)'
        ]
      },
      {
        category: 'Common Buzzwords = Correct Answers',
        items: [
          '"least privilege" → IAM roles at resource level',
          '"audit trail" → Admin Activity logs or Cloud Audit Logs',
          '"point-in-time recovery" → snapshots or database backups',
          '"multi-region for DR" → replicate resources across regions',
          '"minimize egress" → use private connection (VPN/Interconnect)',
          '"single pane of glass" → Cloud Monitoring / Logging workspace'
        ]
      }
    ]
  },
  {
    title: ' EXAM ELIMINATION RULES (GOLD)',
    icon: '🎯',
    tricks: [
      {
        category: 'Decision Trees',
        items: [
          'If "fewest steps" → Marketplace / managed service',
          'If "Google recommended" → managed + predefined roles',
          'If "global + scale + consistency" → Spanner',
          'If "time series" → Bigtable',
          'If "temporary access" → Signed URL',
          'If "large file fast upload" → gsutil -m',
          'If "web app autoscale" → App Engine Automatic',
          'If "containers + scale" → GKE',
          'If "analytics + BigData" → BigQuery'
        ]
      },
      {
        category: 'Red Flags (Trap Answers)',
        items: [
          'Answer mentions "manual health checks" for MIG → WRONG',
          'Answer says "Cloud SQL for global scale" → WRONG (use Spanner)',
          'Answer uses custom IAM roles when predefined exists → WRONG',
          'Answer says "Firestore for historical analytics" → WRONG (use BigQuery)',
          'Answer ignores egress costs → LIKELY WRONG'
        ]
      }
    ]
  }
];

const TricksPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]));

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="mb-4 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
          >
            ← Back
          </button>
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">GCP Exam Tricks</h1>
          </div>
          <p className="text-gray-600">Essential memory hacks and decision trees for the Google Cloud Certified Associate Cloud Engineer exam</p>
        </div>

        {/* Tricks Sections */}
        <div className="space-y-4">
          {tricksData.map((section, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleSection(idx)}
                className="w-full px-4 md:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="text-2xl">{section.icon}</span>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800">{section.title}</h2>
                </div>
                <div className="text-blue-600">
                  {expandedSections.has(idx) ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {expandedSections.has(idx) && (
                <div className="px-4 md:px-6 py-4 bg-gray-50 border-t space-y-4">
                  {section.tricks.map((trick, tIdx) => (
                    <div key={tIdx} className="space-y-2">
                      <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        {trick.category}
                      </h3>
                      <ul className="space-y-2 ml-4">
                        {trick.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex gap-3 text-sm md:text-base text-gray-700">
                            <span className="text-yellow-500 font-bold flex-shrink-0">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 p-4 md:p-6 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm md:text-base text-gray-700">
            <span className="font-semibold">💡 Pro Tip:</span> Memorize the "Exam Elimination Rules" section. Most questions can be narrowed down using these decision trees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TricksPage;
