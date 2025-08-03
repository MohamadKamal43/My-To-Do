import React from "react";
import { Link } from "react-router";
import { CheckCircle, Clock, Target, Users, ArrowRight } from "lucide-react";

export default function Landing() {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Task Management",
      description:
        "Create, edit, and organize your tasks with priority levels and due dates",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Real-time Updates",
      description:
        "Track your progress with instant updates and status changes",
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Goal Tracking",
      description:
        "Set priorities and deadlines to stay focused on what matters most",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "User-Friendly",
      description:
        "Intuitive interface designed for productivity and ease of use",
    },
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-y-auto">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🎉 Welcome to the future of task management
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Organize Your Life with{" "}
              <span className="text-blue-600 relative">
                My To-Do
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-200 -z-10 transform rotate-1"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your productivity with our elegant task management
              solution. Create, organize, and complete tasks with ease while
              staying focused on your goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/register"
              className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/login"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Sign In
            </Link>
          </div>

          {/* Demo Preview */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl mb-4">
                <h3 className="text-lg font-semibold">
                  ✨ Sample Task Dashboard
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-red-800">
                      High Priority
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1">
                    Complete Project Proposal
                  </h4>
                  <p className="text-sm text-gray-600">Due: Tomorrow</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-yellow-800">
                      Medium Priority
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1">
                    Review Team Feedback
                  </h4>
                  <p className="text-sm text-gray-600">Due: Next Week</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg opacity-60">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-green-800">
                      Completed
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 line-through">
                    Setup Development Environment
                  </h4>
                  <p className="text-sm text-gray-600">Completed Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Everything You Need to Stay Productive
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you manage tasks efficiently
              and achieve your goals faster
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Organized?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who have transformed their productivity with
            My To-Do
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Your Journey
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition duration-200">
              Already Have Account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
