'use client'
import React from 'react'
import Link from 'next/link'
import { role } from '../lib/data'

import { 
  HiHome, 
  HiUserGroup, 
  HiAcademicCap, 
  HiUsers, 
  HiBookOpen, 
  HiClipboardList, 
  HiLightningBolt, 
  HiClipboardCheck, 
  HiPencil, 
  HiCalendar, 
  HiChatAlt, 
  HiSpeakerphone, 
  HiUser, 
  HiCog, 
  HiLogout,
  HiOutlineClipboardList 
} from 'react-icons/hi'

const menuItems = [
  {
    title: 'Menu',
    items: [
      { 
        label: 'Home', 
        href: '/', 
        icon: HiHome,
        visible: [ 'admin', 'teacher', 'student', 'parent' ]
      },
      { 
        label: 'Teachers', 
        href: '/list/teachers', 
        icon: HiUserGroup,
        visible: [ 'admin', 'teacher' ]
      },
      { 
        label: 'Students', 
        href: '/list/students', 
        icon: HiAcademicCap,
        visible: [ 'admin', 'teacher' ]
      },
      { 
        label: 'Parents', 
        href: '/list/parents', 
        icon: HiUsers,
        visible: [ 'admin', 'teacher' ]
      },
      { 
        label: 'Subjects', 
        href: '/list/subjects', 
        icon: HiBookOpen,
        visible: ['admin']
      },
      { 
        label: 'Classes', 
        href: '/list/classes', 
        icon: HiClipboardList,
        visible: ['admin', 'teacher']
      },
      { 
        label: 'Lessons', 
        href: '/list/lessons', 
        icon: HiLightningBolt,
        visible: ['admin', 'teacher']
      },
      { 
        label: 'Exams', 
        href: '/list/exams', 
        icon: HiClipboardCheck,
        visible: ['admin', 'teacher', 'student', 'parent']
      },
      { 
        label: 'Assignments', 
        href: '/list/assignments', 
        icon: HiPencil,
        visible: ['admin', 'teacher', 'student', 'parent']
      },
      { 
        label: 'Results', 
        href: '/list/results', 
        icon: HiOutlineClipboardList,
        visible: ['admin', 'teacher', 'student', 'parent']
      },
      { 
        label: 'Attendance', 
        href: '/list/attendance', 
        icon: HiClipboardCheck,
        visible: ['admin', 'teacher', 'student', 'parent']
      },
      { 
        label: 'Events', 
        href: '/list/events', 
        icon: HiCalendar,
        visible: ['admin', 'teacher', 'student', 'parent']
      },
      { 
        label: 'Messages', 
        href: '/list/messages', 
        icon: HiChatAlt,
        visible: ['admin', 'teacher', 'student', 'parent']
      },
      { 
        label: 'Announcements', 
        href: '/list/announcements', 
        icon: HiSpeakerphone,
        visible: ['admin', 'teacher', 'student', 'parent']
      },
    ],
  },
  {
    title: 'OTHERS',
    items: [
      { 
        label: 'Profile', 
        href: '/profile', 
        icon: HiUser,
        visible:['admin', 'teacher', 'student', 'parent']
      },
      { 
        label: 'Settings', 
        href: '/settings', 
        icon: HiCog,
        visible:['admin', 'teacher', 'student', 'parent']
      },
      { 
        label: 'Logout', 
        href: '/logout', 
        icon: HiLogout,
        visible:['admin', 'teacher', 'student', 'parent']
      },
    ],
  }
]


export default function Navigation() {
  return (
    <nav className='mt-4 text-sm'>
      {menuItems.map((menu, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h2 className="hidden lg:block my-4 text-gray-400 font-light">{menu.title}</h2>
          <ul className="flex flex-col justify-center lg:justify-start">
            {menu.items.map((item, itemIndex) => 
              item.visible.includes(role) && (
                <li key={itemIndex}>
                  <Link href={item.href} className="flex items-center justify-center lg:justify-start gap-4 py-2 md:px-2 rounded-md hover:bg-imediusSkyLight text-gray-500">
                    {item.icon && <item.icon className="w-5 h-5" />}
                    {item.label && <span className="hidden lg:block">{item.label}</span>}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </nav>
  )
}
