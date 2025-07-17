<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
public function up()
{
    Schema::table('orders_request', function (Blueprint $table) {
        $table->text('message')->nullable()->after('product_id');
    });
}

public function down()
{
    Schema::table('orders_request', function (Blueprint $table) {
        $table->dropColumn('message');
    });
}

};
