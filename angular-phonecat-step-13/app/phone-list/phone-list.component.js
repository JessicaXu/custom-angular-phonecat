'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        // 这里参数是空的，因为默认有参数{phoneId:"phones"}
		// 写法是同步的，实际是异步的，先返回了一个future对象，有实际结果后再更新。
		this.phones = Phone.query(); 
        this.orderProp = 'age';
      }
    ]
  });
