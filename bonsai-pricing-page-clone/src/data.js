const productData = [
  {
    title: "Bonsai Workflow",
    description:
      "Look professional, win more clients and manage your business from one place",
    children: [
      {
        title: "Invoices",
        description:
          "Get paid faster with automatic invoicing, online payments and more",
      },
      {
        title: "Proposals",
        description:
          "Create client-winning proposals with open receipts, custom packages and electronic approvals",
      },
      {
        title: "Contracts",
        description:
          "Protect your business with fully-customizable contract templates. Edit and e-sign hassle free.",
      },
      {
        title: "Client CRM",
        description:
          "Add leads, manage existing clients and track projects easily from one place",
      },
      {
        title: "Forms & Automations",
        description:
          "Boost client intake and automate feedback with custom web forms and questionnaires",
      },
      {
        title: "Time Tracking",
        description:
          "Stay organized with Bonsai's all-in-one time tracker, automated timesheets and billing system",
      },
      {
        title: "Accounting",
        description:
          "Manage your finances easily with income reports, expense tracking, tax reminders and more",
      },
      {
        title: "Task Tracking",
        description:
          "Stress-free task management with project templates and integrated timesheets",
      },
    ],
  },
  {
    title: "Bonsai Tax",
    description:
      "Track expenses, maximize tax write-offs, and estimate taxes without the headache",
  },
  {
    title: "Bonsai Cash",
    description:
      "Bonsai's all-in-one financial hub: No fees and lightning fast payouts",
  },
];

const templatesData = [
  {
    title: "Contract Templates",
    samples: [
      "Free Contract Maker",
      "Social Media Management Contract Template",
      "Graphic Design Contract Template",
      "Digital Marketing Contract Template",
    ],
  },
  {
    title: "Proposal Templates",
    samples: [
      "Graphic Design Proposal Template",
      "Business Proposal Template",
      "Brand Ambassador Proposal Template",
      "Data Entry Proposal Letter Template",
    ],
  },
  {
    title: "Invoice Templates",
    samples: [
      "Social Media Invoice Templates",
      "Contractor Invoice Template",
      "Web Design Invoice Template",
      "Influencer Invoice Template",
    ],
  },
  {
    title: "Agreement Templates",
    samples: [
      "Influencer Agreement Template",
      "Influencer Collaboration Agreement Template",
      "Monthly Retainer Agreement Template",
      "Writer Agreement Template",
    ],
  },
  {
    title: "Quote Templates",
    samples: [
      "Web Design Quotation Template",
      "Interior Design Quotation Template",
      "Digital Marketing Quotation Template",
      "Video Production Quotation Template",
    ],
  },
  {
    title: "Scope of Work Templates",
    samples: [
      "Website Development Scope of Work Template",
      "Digital Marketing Scope of Work Template",
      "Consultant Scope of Work Template",
      "Interior Design Scope ofWork Template",
    ],
  },
  {
    title: "Brief Templates",
    samples: [
      "Design Brief Template",
      "Architecture Design Brief",
      "Fashion Design Brief",
      "Creative Brief Template",
    ],
  },
];

const plansData = [
  {
    title: "Starter",
    description: "Ideal for freelancers and contractors just starting out.",
    price: { month: "24", year: "17" },
    features: [
      "All Templates",
      "Unlimited Clients & Projects",
      "Invoicing & Payments",
      "Proposals & Contracts",
      "Tasks & Time Tracking",
      "Client CRM",
      "Expense Tracking",
      "Up to 5 Project Collaborators",
    ],
  },
  {
    title: "Professional",
    description: "Everything a growing independent business needs to thrive.",
    price: { month: "39", year: "32" },
    features: [
      "Everything in Starter plus...",
      "Custom Branding",
      "Forms & Questionnaires",
      "Workflow Automations",
      "Client Portal",
      "QuickBooks Integration",
      "Calendly Integration",
      "Zapier Integration",
      "Up to 15 Project Collaborators",
    ],
    popular: true,
  },
  {
    title: "Business",
    description: "The perfect package for small businesses and agencies.",
    price: { month: "79", year: "52" },
    features: [
      "Everything in Starter and Professional plus...",
      "Subcontractor Management",
      "Hiring Agreement Templates (1099 contracts)",
      "Subcontractor Onboarding",
      "Talent Pool",
      "3 Team Seats (additional seats $9/month)",
      "Accountant Access",
      "Connect Multiple Bank Accounts",
      "Unlimited Subcontractors",
      "Unlimited Project Collaborators",
    ],
  },
];

const addonsData = [
  {
    month: {
      title: "Collaborators",
      description:
        "Invite other users to specific projects for limited access and functionality.",
      price: "Free",
    },
    year: {
      title: "Collaborators",
      description:
        "Invite other users to specific projects for limited access and functionality.",
      price: "Free",
    },
  },
  {
    month: {
      title: "Partners",
      description:
        "Invite other users for full account access and company management.",
      price: "$9",
    },
    year: {
      title: "Partners",
      description:
        "Invite other users for full account access and company management.",
      price: "$90",
    },
  },
  {
    month: {
      title: "Bonsai Tax",
      description:
        "Track expenses, identify write-offs, and estimate quarterly taxes easily.",
      price: "$10",
    },
    year: {
      title: "Accounting & Tax Assistant",
      description:
        "Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.",
      price: "$100",
    },
  },
];
const faqData = [
  {
    question: "How does the free trial work?",
    answer:
      "When you start your trial with Bonsai you'll receive full, unlimited access to all of Bonsai's Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.",
  },
  {
    question: "Can I change plans anytime?",
    answer:
      'Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your "Settings" and "Subscription".',
  },
  {
    question: "How do I pause my Bonsai subscription?",
    answer:
      "We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you!Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.",
  },
];

const footerData = {
  PRODUCT: [
    "Proposals",
    "Contracts",
    "Invoicing",
    "Client CRM",
    "Time Tracking",
    "Task Tracking",
    "Forms",
    "Accounting",
    "Bonsai Tax",
    "Bonsai Cash",
  ],
  Pricing: "Bonsai Reviews",
  "FREE RESOURCES": [
    "Freelance Resources",
    "Freelance Blog by Bonsai",
    "How to Write a Contract",
    "Online Signature Maker",
    "Self-Employed Taxes Hub",
    "Self-Employed Tax Calculator",
    "Self-Employed Tax Deductions",
  ],
  BONSAI: [
    "About",
    "Careers",
    "Support",
    "LinkedIn",
    "Twitter",
    "Privacy policy",
    "Legal",
    "Affiliates",
    "Write for Us",
  ],
  Comparisons: [
    "Freshbooks Alternatives",
    "Quickbooks Alternatives",
    "Wave vs Quickbooks",
    "Xero vs Quickbooks",
    "Freshbooks vs Quickbooks",
  ],
  Templates: [
    {
      title: "Invoice Templates",
      children: [
        "Invoice Generator",
        "Blank Invoice Template",
        "Consultant Invoice Template",
        "Editable Invoice Template",
        "Graphic Design Invoice",
        "Web Design Invoice",
        "Contractor Invoice Template",
        "Photography Invoice Template",
        "Self Employed Invoice Template",
      ],
    },
    {
      title: "Proposal Templates",
      children: [
        "Website Proposal Template",
        "Digital Marketing Proposal Template",
        "Social Media Marketing Proposal",
        "Graphic Design Proposal",
        "Freelance Proposal Template",
        "SEO Proposal Template",
      ],
    },
    {
      title: "Contract Templates",
      children: [
        "Online Contract",
        "Graphic Design Contract",
        "Freelance Contract Template",
        "Social Media Marketing Contract",
        "Software Development Contract",
        "Web Design Contract",
        "Video Production Contract",
        "Public Relations Contract",
        "Translation Contract",
      ],
    },
    {
      title: "Agreement Templates",
      children: [
        "Retainer Agreement Template",
        "Influencer Agreement Template",
        "Collaboration Agreement Template",
        "Software Development Agreement",
        "Marketing Agreement Template",
      ],
    },
    {
      title: "Scope of Work Templates",
      children: [
        "Website Development Scope of Work",
        "Digital Marketing Scope of Work",
        "Consultant Statement of Work Template",
        "Software Development Scope of Work",
      ],
    },
    {
      title: "Quote Templates",
      children: [
        "Freelance Quotation Template",
        "Web Design Quotation Template",
        "Graphic Design Quotation Template",
        "Interior Design Quotation Template",
        "Video Production Quotation Template",
        "Social Media Marketing Quotation",
      ],
    },
    { title: "Credit Note Templates" },
    { title: "Estimate Templates" },
    { title: "Form Templates" },
  ],
};

export {
  productData,
  templatesData,
  plansData,
  addonsData,
  faqData,
  footerData,
};
