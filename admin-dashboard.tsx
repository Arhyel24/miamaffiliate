/*<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
   Dashboard
  </title>
  <script src="https://cdn.tailwindcss.com">
  </script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&amp;display=swap" rel="stylesheet"/>
  <style>
   body {
            font-family: 'Inter', sans-serif;
            background-color: #E5E7EB;
        }
  </style>
 </head>
 <body class="p-4 md:p-8">
  <div class="max-w-7xl mx-auto">
   <div class="flex flex-col md:flex-row justify-between items-center mb-8">
    <div class="mb-4 md:mb-0">
     <h1 class="text-2xl font-semibold">
      Welcome, Kristin
     </h1>
     <p class="text-gray-500">
      Your personal dashboard overview
     </p>
    </div>
    <div class="flex items-center space-x-4">
     <div class="relative">
      <input class="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none" placeholder="Search" type="text"/>
      <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      </i>
     </div>
     <i class="fas fa-bell text-gray-400">
     </i>
    </div>
   </div>
   <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-white p-6 rounded-lg shadow">
     <div class="flex items-center space-x-4 mb-4">
      <img alt="Profile picture of Kristin Watson" class="w-12 h-12 rounded-full" height="50" src="https://storage.googleapis.com/a1aa/image/yiUHfbAey1htWUUF0MnpTi1LkvEzHFfuB6MAdOd7Jj1e9LpOB.jpg" width="50"/>
      <div>
       <h2 class="text-lg font-semibold">
        Kristin Watson
       </h2>
       <p class="text-gray-500">
        Design Manager
       </p>
      </div>
     </div>
     <div class="flex justify-between items-center">
      <div class="flex items-center space-x-2">
       <i class="fas fa-heart text-red-500">
       </i>
       <span>
        11
       </span>
      </div>
      <div class="flex items-center space-x-2">
       <i class="fas fa-users text-blue-500">
       </i>
       <span>
        56
       </span>
      </div>
      <div class="flex items-center space-x-2">
       <i class="fas fa-briefcase text-yellow-500">
       </i>
       <span>
        12
       </span>
      </div>
     </div>
    </div>
    <div class="bg-gradient-to-r from-pink-500 to-orange-500 p-6 rounded-lg shadow text-white">
     <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">
       Prioritized tasks
      </h2>
      <i class="fas fa-tasks">
      </i>
     </div>
     <div class="text-4xl font-bold">
      83%
     </div>
     <p class="text-sm">
      Avg. Completed
     </p>
    </div>
    <div class="bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-lg shadow text-white">
     <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">
       Additional tasks
      </h2>
      <i class="fas fa-tasks">
      </i>
     </div>
     <div class="text-4xl font-bold">
      56%
     </div>
     <p class="text-sm">
      Avg. Completed
     </p>
    </div>
   </div>
   <div class="bg-white p-6 rounded-lg shadow mt-8">
    <div class="flex justify-between items-center mb-4">
     <h2 class="text-lg font-semibold">
      Trackers connected
     </h2>
     <div class="flex space-x-2">
      <i class="fab fa-google text-gray-500">
      </i>
      <i class="fab fa-apple text-gray-500">
      </i>
      <i class="fab fa-microsoft text-gray-500">
      </i>
      <i class="fas fa-ellipsis-h text-gray-500">
      </i>
     </div>
    </div>
    <p class="text-gray-500">
     3 active connections
    </p>
   </div>
   <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
    <div class="bg-white p-6 rounded-lg shadow col-span-1 md:col-span-2">
     <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">
       Focusing
      </h2>
      <div class="flex items-center space-x-2">
       <span class="text-gray-500">
        Range:
       </span>
       <select class="bg-gray-100 rounded-full py-1 px-3 focus:outline-none">
        <option>
         Last month
        </option>
       </select>
      </div>
     </div>
     <div class="flex justify-between items-center mb-4">
      <div class="flex items-center space-x-2">
       <span class="w-3 h-3 bg-red-500 rounded-full">
       </span>
       <span class="text-gray-500">
        Maximum of focus
       </span>
      </div>
      <div class="flex items-center space-x-2">
       <span class="w-3 h-3 bg-purple-500 rounded-full">
       </span>
       <span class="text-gray-500">
        Min or lack of focus
       </span>
      </div>
     </div>
     <div class="relative">
      <div class="absolute inset-0 flex justify-center items-center">
       <div class="text-center">
        <div class="text-lg font-semibold">
         Week 8
        </div>
        <div class="text-gray-500">
         Unbalanced
        </div>
       </div>
      </div>
      <img alt="Graph showing focus data over time" class="w-full h-48 object-cover" height="200" src="https://storage.googleapis.com/a1aa/image/0heZm4qBefGbspthgfZLvezVjWhbVeI0pirPl82EtDI92vk6E.jpg" width="600"/>
     </div>
     <div class="text-right mt-4">
      <div class="text-4xl font-bold">
       41%
      </div>
      <p class="text-gray-500">
       Avg. Conc-ion
      </p>
     </div>
    </div>
    <div class="bg-white p-6 rounded-lg shadow">
     <h2 class="text-lg font-semibold mb-4">
      My meetings
     </h2>
     <div class="space-y-4">
      <div class="flex justify-between items-center">
       <div>
        <div class="text-gray-500">
         Tue, 11 Jul
        </div>
        <div class="font-semibold">
         Quick Daily Meeting
        </div>
        <div class="text-gray-500">
         08:15 am
        </div>
       </div>
       <i class="fas fa-external-link-alt text-gray-500">
       </i>
      </div>
      <div class="flex justify-between items-center">
       <div>
        <div class="text-gray-500">
         Tue, 11 Jul
        </div>
        <div class="font-semibold">
         John Onboarding
        </div>
        <div class="text-gray-500">
         09:30 pm
        </div>
       </div>
       <i class="fas fa-external-link-alt text-gray-500">
       </i>
      </div>
      <div class="flex justify-between items-center">
       <div>
        <div class="text-gray-500">
         Tue, 12 Jul
        </div>
        <div class="font-semibold">
         Call With a New Team
        </div>
        <div class="text-gray-500">
         02:30 pm
        </div>
       </div>
       <i class="fas fa-external-link-alt text-gray-500">
       </i>
      </div>
      <div class="flex justify-between items-center">
       <div>
        <div class="text-gray-500">
         Tue, 15 Jul
        </div>
        <div class="font-semibold">
         Lead Designers Event
        </div>
        <div class="text-gray-500">
         04:00 pm
        </div>
       </div>
       <i class="fas fa-external-link-alt text-gray-500">
       </i>
      </div>
     </div>
     <div class="text-right mt-4">
      <a class="text-blue-500" href="#">
       See all meetings
      </a>
     </div>
    </div>
   </div>
   <div class="bg-white p-6 rounded-lg shadow mt-8">
    <h2 class="text-lg font-semibold mb-4">
     Developed areas
    </h2>
    <div class="space-y-4">
     <div class="flex justify-between items-center">
      <div class="text-gray-500">
       Sport Skills
      </div>
      <div class="w-1/2 bg-gray-200 rounded-full h-2">
       <div class="bg-blue-500 h-2 rounded-full" style="width: 71%;">
       </div>
      </div>
      <div class="text-gray-500">
       71%
      </div>
     </div>
     <div class="flex justify-between items-center">
      <div class="text-gray-500">
       Blogging
      </div>
      <div class="w-1/2 bg-gray-200 rounded-full h-2">
       <div class="bg-blue-500 h-2 rounded-full" style="width: 92%;">
       </div>
      </div>
      <div class="text-gray-500">
       92%
      </div>
     </div>
     <div class="flex justify-between items-center">
      <div class="text-gray-500">
       Leadership
      </div>
      <div class="w-1/2 bg-gray-200 rounded-full h-2">
       <div class="bg-blue-500 h-2 rounded-full" style="width: 33%;">
       </div>
      </div>
      <div class="text-gray-500">
       33%
      </div>
     </div>
     <div class="flex justify-between items-center">
      <div class="text-gray-500">
       Meditation
      </div>
      <div class="w-1/2 bg-gray-200 rounded-full h-2">
       <div class="bg-blue-500 h-2 rounded-full" style="width: 56%;">
       </div>
      </div>
      <div class="text-gray-500">
       56%
      </div>
     </div>
     <div class="flex justify-between items-center">
      <div class="text-gray-500">
       Philosophy
      </div>
      <div class="w-1/2 bg-gray-200 rounded-full h-2">
       <div class="bg-blue-500 h-2 rounded-full" style="width: 70%;">
       </div>
      </div>
      <div class="text-gray-500">
       70%
      </div>
     </div>
    </div>
   </div>
  </div>
 </body>
</html>*/


