import { mockNotifications } from '@/data/mockData';
import { Bell, Award, Briefcase, Clock, CheckCircle } from 'lucide-react';

export function Notifications() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'assessment':
        return Clock;
      case 'league_update':
        return Award;
      case 'job_match':
        return Briefcase;
      default:
        return Bell;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'assessment':
        return 'bg-blue-100 text-blue-600';
      case 'league_update':
        return 'bg-purple-100 text-purple-600';
      case 'job_match':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-600 mt-1">Stay updated with your activity</p>
          </div>
          <button className="px-4 py-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            Mark all as read
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
          {mockNotifications.map((notification) => {
            const Icon = getIcon(notification.type);
            const iconColor = getIconColor(notification.type);

            return (
              <div
                key={notification.id}
                className={`p-6 hover:bg-gray-50 transition-colors ${!notification.read ? 'bg-indigo-50/30' : ''
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${iconColor} flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 mb-1">{notification.content}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>{new Date(notification.timestamp).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{new Date(notification.timestamp).toLocaleTimeString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {!notification.read && (
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    )}
                    <button className="text-sm text-gray-600 hover:text-indigo-600">
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {mockNotifications.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
            <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
            <p className="text-gray-600">You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
}
